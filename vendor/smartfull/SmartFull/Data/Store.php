<?php

namespace SmartFull\Data;

use SmartFull\Data\Proxy;
use SmartFull\Data\Model;
use SmartFull\Data\ResultSet;
use SmartFull\Data\Traits\Events;
use SmartFull\Data\Interfaces\ModelInterface;

class Store
{
    use Events;

    const
        DML_INSERT = 0,
        DML_SELECT = 1,
        DML_UPDATE = 2,
        DML_DELETE = 3,
        INVALID_STATEMENT = "Não foi possível criar o script DML para a sua requisição!";

    protected $_proxy = null;
    protected $result = null;

    public function __construct()
    {
        $this->_proxy = Proxy::borrow();
        $this->result = new ResultSet();
    }

    /**
     * @return \PDO
     */
    public function getProxy() : \PDO
    {
        return $this->_proxy;
    }

    /**
     * @return null|ResultSet
     */
    public function getResult() : ResultSet
    {
        return $this->result;
    }

    /**
     * @param ModelInterface $model
     * @return \PDOStatement
     */
    public function sqlSelect( ModelInterface &$model ) : \PDOStatement {
        $fields = array();
        $notate = $model->getNotate();
        $entity  = $notate->instance['Entity']->table;

        foreach ($model as $field => $value) {
            $fields[] = $this->fieldType($notate,$field);
        }

        $sql = "SELECT " . trim(implode(', ', $fields)) . " FROM {$entity} WHERE id = :id";

        return $this->bindField($model,$sql,self::DML_SELECT);
    }

    /**
     * @param ModelInterface $model
     * @return \PDOStatement
     */
    public function sqlUpdate( ModelInterface &$model ) : ?\PDOStatement {
        $notate = $model->getNotate();
		$entity = $notate->instance['Entity']->table;

        $modify = 0;
        $fields = array();

        foreach ($model as $field => $value) {
            if($field != "id" && strlen($value) != 0) {
                $modify++;				
                $fields[] = "$field = :$field";
            }
        }

        $sql = "UPDATE {$entity} SET " . trim(implode(', ', $fields)) . " WHERE id = :id";

        return $modify == 0 ? null : $this->bindField($model,$sql,self::DML_UPDATE);
    }

    /**
     * @param ModelInterface $model
     * @return \PDOStatement
     */
    public function sqlInsert( ModelInterface &$model ) : ?\PDOStatement {
		$notate = $model->getNotate();
        $entity = $notate->instance['Entity']->table;

        $modify = 0;
        $fields = array();
		$values = array();
		
        $exists = $notate->property;

        foreach ($model as $field => $value) {
            $column = $exists[$field]["Column"];
            $strategy = isset($column->strategy) ? $column->strategy == "AUTO" : false;

            if(($strategy == false)&&($column->type != 'formula')&&(strlen($value) != 0)) {
                $modify++;
                $fields[] = " $field";
                $values[] = " :$field";
            }
        }

        $sql = "INSERT INTO {$entity} ( " . trim(implode(',', $fields)) . " ) VALUES ( " . trim(implode(',', $values)) . " )";

        return $modify == 0 ? null : $this->bindField($model,$sql,self::DML_INSERT);
    }

    /**
     * @param ModelInterface $model
     * @return \PDOStatement
     */
    public function sqlDelete( ModelInterface &$model ) : \PDOStatement {
        $notate = $model->getNotate();
		$entity = $notate->instance['Entity']->table;

        $sql = "DELETE FROM {$entity} WHERE id = :id";

        return $this->bindField($model,$sql,self::DML_DELETE);
    }

    public function fieldType( $notate, $field ) {
        $exists = $notate->property;
        $column = $exists[$field]['Column'];

        if($column->type == 'formula') {
            $params = explode(',',$column->default);
            $method = $params[0];
            $field = $this->$method($params);
        }

        return $field;
    }

    /**
     * @param ModelInterface $model
     * @param $sql
     * @param $type
     * @return \PDOStatement
     */
    private function bindField( ModelInterface &$model, $sql, $type ) : \PDOStatement {
        $notate = $model->getNotate();
        $commit = $this->_proxy->prepare($sql);
        $exists = $notate->property;

        foreach ($model as $field => $value) {
            $column = $exists[$field]["Column"];

            switch ($type) {
                case self::DML_INSERT:
                    $strategy = isset($column->strategy) ? $column->strategy === "AUTO" : false;
                    if(($strategy == false)&&($column->type != 'formula')) {
                        $commit->bindValue(":$field", $model->$field, $this->getParams($column->type));
                    }
                    break;
                case self::DML_UPDATE:
                    if($column->type != 'formula' && strlen($value) != 0) {
                        $commit->bindValue(":$field", $model->$field, $this->getParams($column->type));
                    }
                    break;
                case self::DML_DELETE:
                    if($field == 'id') {
                        $commit->bindValue(":$field", $model->$field, $this->getParams($column->type));
                    }
                    break;
                case self::DML_SELECT:
                    if($field == 'id') {
                        $commit->bindValue(":$field", $model->$field, $this->getParams($column->type));
                    }
                    break;
            }
        }

        return $commit;
    }

    private function getParams( $paramName ) {
        switch ($paramName) {
            case is_null($paramName):
                return \PDO::PARAM_NULL;
                break;
            case 'boolean':
                return \PDO::PARAM_BOOL;
                break;
            case 'integer':
                return \PDO::PARAM_INT;
                break;
            default:
                return \PDO::PARAM_STR;
        }
    }

    private function getNameSearch(array $params) : string {
        $field = $params[1];
        $fieldname = substr_replace($field, '', -2);
        $table = isset($params[2]) ? $params[2] : substr_replace($field, '', -2);

        $result = "{$fieldname}name = ( SELECT name FROM {$table} WHERE id = {$field} )";

        return $result;
    }

}