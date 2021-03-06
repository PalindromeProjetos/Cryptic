<?php

namespace SmartFull\Data;

use SmartFull\Data\Model;
use SmartFull\Data\Store;
use SmartFull\Utils\Strings;
use SmartFull\Data\ResultSet;
use SmartFull\Data\PageRequest;
use SmartFull\Data\Traits\Annotations;
use SmartFull\Data\Interfaces\ModelInterface;
use SmartFull\Data\Interfaces\BusinessInterface;

class Business extends Store implements BusinessInterface
{
    use Annotations;

    public $_table = null;

    public function __construct()
    {
        $this->setNotation(array(
            'instance'=>array('Entity')
        ));

		$this->_notate = $this->getAnnotations($this);
        $this->_table  = $this->_notate->instance['Entity']->table;
        $this->_model  = $this->_notate->instance['Entity']->model;

        parent::__construct();
    }

    public function get(int $id) : ResultSet {
        $result = $this->getResult();

        try {
            $obj = (object) array("id"=>$id);
            $model = new $this->_model($obj);
            $statement = $this->sqlSelect($model);

            $callback = $statement->execute();

            if(!$callback) {
                throw new \PDOException($result::FAILURE_STATEMENT);
            }

            $rows = $statement->fetchAll();

            $result->setRows($rows);

        } catch ( \PDOException $e ) {
            $result->setSuccess(false);
            $result->setText($e->getMessage());
        }

        return $result;
    }

    public function getAll(PageRequest $pager) : ResultSet {
        $model = new $this->_model();
        $result = $this->getResult();

        $fields = array();

        foreach ($model as $field => $value) {
            $fields[] = $field;
        }

        $sql = "
            declare
                @start int = :start,
                @limit int = :limit;

            WITH pager AS (
                SELECT
                    ". trim(implode(', ', $fields)) .",
                    ROW_NUMBER() OVER (ORDER BY id) AS rowindex
                FROM
                    {$this->_table}
            )
            SELECT
                ". trim(implode(', ', $fields)) .",
				total = ( select count(id) from pager )
            FROM
                pager
            WHERE rowindex BETWEEN @start AND @limit";

        try {

            $statement = $this->getProxy()->prepare($sql);
            $statement->bindValue(":start", $pager->getStart(), \PDO::PARAM_INT);
            $statement->bindValue(":limit", $pager->getLimit(), \PDO::PARAM_INT);

            $callback = $statement->execute();

            if(!$callback) {
                throw new \PDOException($result::FAILURE_STATEMENT);
            }

            $rows = $statement->fetchAll();

            $records = (count($rows) != 0) ? $rows[0]['total'] : 0;

            $result->setRows($rows);
            $result->setRecords($records);

        } catch ( \PDOException $e ) {
            $result->setSuccess(false);
            $result->setText($e->getMessage());
        }

        return $result;
    }

    public function search(Strings $filter, PageRequest $pager): ResultSet {
        $start = $pager->getStart();
        $limit = $pager->getLimit();
        $model = new $this->_model();
        $result = $this->getResult();

        $fields = array();

        foreach ($model as $field => $value) {
            $fields[] = $field;
        }

        $sql = "
            declare
                @start int = :start,
                @limit int = :limit,
                @filter varchar(50) = :filter;

            WITH pager AS (
                SELECT
                    ". trim(implode(', ', $fields)) .",
                    ROW_NUMBER() OVER (ORDER BY id) AS rowindex
                FROM
                    {$this->_table}
                where name like @filter
            )
            SELECT
                ". trim(implode(', ', $fields)) .",
				total = ( select count(id) from pager )
            FROM
                pager
            WHERE rowindex BETWEEN @start AND @limit";

        try {

            $pdo = $this->getProxy()->prepare($sql);
            $pdo->bindValue(":start", $start, \PDO::PARAM_INT);
            $pdo->bindValue(":limit", $limit, \PDO::PARAM_INT);
            $pdo->bindValue(":filter", $filter->format('%{0}%'), \PDO::PARAM_STR);

            $callback = $pdo->execute();

            if(!$callback) {
                throw new \PDOException($result::FAILURE_STATEMENT);
            }

            $rows = $pdo->fetchAll();

            $total = (count($rows) != 0) ? $rows[0]['total'] : 0;

            $result->setRows($rows);
            $result->setRecords($total);

        } catch ( \PDOException $e ) {
            $result->setSuccess(false);
            $result->setText($e->getMessage());
        }

        return $result;

    }

	public function insert(ModelInterface &$model) : ResultSet {
		$result = $this->getResult();

		try {

			$this->preInsert($model);


			$this->posInsert($model);

		} catch ( \PDOException $e ) {
			$result->setSuccess(false);
			$result->setText($e->getMessage());
		}

		return $result;

	}

    public function update(ModelInterface &$model) : ResultSet {
        $result = $this->getResult();

        try {

            $this->preUpdate($model);

            $statement = $this->sqlUpdate($model);

            $callback = $statement->execute();

            if(!$callback) {
                throw new \PDOException($result::FAILURE_STATEMENT);
            }

            $this->posUpdate($model);

        } catch ( \PDOException $e ) {
            $result->setSuccess(false);
            $result->setText($e->getMessage());
        }

        return $result;

    }

    public function delete(ModelInterface &$model) : ResultSet {
        $result = $this->getResult();

        try {

            $this->preDelete($model);

            $statement = $this->sqlDelete($model);

            $callback = $statement->execute();

            if(!$callback) {
                throw new \PDOException($result::FAILURE_STATEMENT);
            }

            $this->posDelete($model);

        } catch ( \PDOException $e ) {
            $result->setSuccess(false);
            $result->setText($e->getMessage());
        }

        return $result;

    }

}