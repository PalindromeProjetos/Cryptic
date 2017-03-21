<?php

namespace Cryptic\Api\Controllers;

use SmartFull\Utils\Strings;
use SmartFull\Data\ResultSet;
use SmartFull\Data\Controller;
use SmartFull\Data\PageRequest;
use Cryptic\Api\Business\TokenBusiness;
use Cryptic\Api\Business\ClientBusiness;
use Cryptic\Api\Business\ClientModuleBusiness;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

/**
 * @RoutePrefix {
 *      "name":"clients"
 * }
 */
class ClientController extends Controller
{
    protected $tokenBusiness = null;
    protected $clientBusiness = null;
    protected $clientModuleBusiness = null;

    public function __construct(?Request &$request, ?Response &$response)
    {
        parent::__construct($request, $response);

        $this->tokenBusiness = new TokenBusiness();
        $this->clientBusiness = new ClientBusiness();
        $this->clientModuleBusiness = new ClientModuleBusiness();
    }

    /**
     * @HttpGet {
     *      "route":""
     * }
     *
     * @param string $filter
     * @param int $start
     * @param int $limit
     * @return ResultSet
     */
    public function search(string $filter = "", int $start = 0, int $limit = 10) : ResultSet {

        $string = new Strings($filter);
        $pager  = new PageRequest(array("start"=>$start, "limit"=>$limit));

        $result = $this->clientBusiness->search($string, $pager);

        return $result;
    }

    /**
     * @HttpGet {
     *      "route":"list"
     * }
     */
    public function getAll(int $start = 0, int $limit = 10) : ResultSet {
        $pager  = new PageRequest(array("start"=>$start, "limit"=>$limit));

        $result = $this->clientBusiness->getAll($pager);

        return $result;
    }

    /**
     * @HttpGet {
     *      "route":"{id}"
     * }
     */
    public function getById(int $id) : ResultSet {

        $result = $this->clientBusiness->get($id);

        return $result;
    }

    /**
     * @HttpGet {
     *      "route":"module/{id}"
     * }
     */
    public function getByIdModuleClient(int $id) : ResultSet {
        $result = $this->clientModuleBusiness->get($id);

        return $result;
    }

    /**
     * @HttpGet {
     *      "route":"modules/{clientid}"
     * }
     */
    public function getByModuleClientId(int $clientid, int $start = 0, int $limit = 10) : ResultSet {
        $pager  = new PageRequest(array("start"=>$start, "limit"=>$limit));

        $result = $this->clientModuleBusiness->getByClientId($clientid,$pager);

        return $result;
    }

    /**
     * @HttpGet {
     *      "route":"module-tokens/{clientmoduleid}"
     * }
     */
    public function getByTokensModuleClientId(int $clientmoduleid, int $start = 0, int $limit = 10) : ResultSet {
        $pager  = new PageRequest(array("start"=>$start, "limit"=>$limit));

        $result = $this->tokenBusiness->getByModuleClientId($clientmoduleid,$pager);

        return $result;
    }
}
