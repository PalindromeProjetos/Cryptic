<?php

namespace Cryptic\Api\Business;

use SmartFull\Data\Auth;
use SmartFull\Utils\Strings;
use SmartFull\Data\Business;
use SmartFull\Data\ResultSet;
use Cryptic\Api\Models\Token;
use SmartFull\Data\PageRequest;
use SmartFull\Data\Traits\Blowfish;
use SmartFull\Data\Interfaces\ModelInterface;
use Psr\Http\Message\ServerRequestInterface as Request;

/**
 * @Entity {
 *      "table":"token",
 *      "model":"\\Cryptic\\Api\\Models\\Token"
 * }
 */
class TokenBusiness extends Business
{

    public function preInsert(ModelInterface &$model)
    {
        $model->creationdate = date("Ymd H:i:s");
        $model->creationusername = 'sator.etimba';
    }

    public function getByModuleClientId(int $clientmoduleid, PageRequest $pager): ResultSet {
        $result = $this->getResult();

        $sql = "
            declare
                @start int = :start,
                @limit int = :limit,
                @clientmoduleid int = :clientmoduleid;
                
            WITH pager AS (
                SELECT
                    t.*,
                    ROW_NUMBER() OVER (ORDER BY t.id) AS rowindex
                FROM
                    token t
                WHERE t.clientmoduleid = @clientmoduleid
            )
            SELECT
                p.*,
				total = ( select count(id) from pager )
            FROM
                pager p
            WHERE rowindex BETWEEN @start AND @limit";

        try {
            $pdo = $this->getProxy()->prepare($sql);
            $pdo->bindValue(":clientmoduleid", $clientmoduleid, \PDO::PARAM_INT);
            $pdo->bindValue(":start", $pager->getStart(), \PDO::PARAM_INT);
            $pdo->bindValue(":limit", $pager->getLimit(), \PDO::PARAM_INT);

            $callback = $pdo->execute();

            if(!$callback) {
                $result->setStatus(401);
                throw new \Exception($result::FAILURE_STATEMENT);
            }

            $rows = $pdo->fetchAll();

            $records = (count($rows) != 0) ? $rows[0]['total'] : 0;

            $result->setRows($rows);
            $result->setRecords($records);

        } catch ( \PDOException $e ) {
            $result->setSuccess(false);
            $result->setText($e->getMessage());
        }

        return $result;

    }

}