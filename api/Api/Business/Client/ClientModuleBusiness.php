<?php

namespace Cryptic\Api\Business;

use SmartFull\Data\Auth;
use SmartFull\Utils\Strings;
use SmartFull\Data\Business;
use SmartFull\Data\ResultSet;
use SmartFull\Data\PageRequest;
use SmartFull\Data\Traits\Blowfish;
use SmartFull\Data\Interfaces\ModelInterface;
use Psr\Http\Message\ServerRequestInterface as Request;

/**
 * @Entity {
 *      "table":"clientmodule",
 *      "model":"\\Cryptic\\Api\\Models\\ClientModule"
 * }
 */
class ClientModuleBusiness extends Business
{

    public function getByClientId(int $clientid, PageRequest $pager): ResultSet {
        $result = $this->getResult();

        $sql = "
            declare
                @start int = :start,
                @limit int = :limit,
                @clientid int = :clientid;
                
            WITH pager AS (
                SELECT
                    cm.*,
					modulename = ( SELECT m.name FROM module m WHERE m.id = cm.moduleid ),
                    ROW_NUMBER() OVER (ORDER BY cm.id) AS rowindex
                FROM
                    clientmodule cm
                WHERE cm.clientid = @clientid
            )
            SELECT
                p.*,
				total = ( select count(id) from pager )
            FROM
                pager p
            WHERE rowindex BETWEEN @start AND @limit";

        try {
            $pdo = $this->getProxy()->prepare($sql);
            $pdo->bindValue(":clientid", $clientid, \PDO::PARAM_INT);
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