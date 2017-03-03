<?php

namespace Cryptic\Api\Controllers;

use SmartFull\Utils\Strings;
use SmartFull\Data\ResultSet;
use SmartFull\Data\Controller;
use SmartFull\Data\PageRequest;
use Cryptic\Api\Business\TokenBusiness;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

/**
 * @RoutePrefix {
 *      "name":"tokens"
 * }
 */
class TokenController extends Controller
{

    protected $tokenBusiness = null;

    public function __construct(?Request &$request, ?Response &$response)
    {
        parent::__construct($request, $response);
        $this->tokenBusiness = new TokenBusiness();
    }

    /**
     * @HttpGet {
     *      "route":"list"
     * }
     */
    public function getAll(int $start = 0, int $limit = 10) : ResultSet {
        $pager  = new PageRequest(array("start"=>$start, "limit"=>$limit));

        $result = $this->tokenBusiness->getAll($pager);

        return $result;
    }

    /**
     * @HttpGet {
     *      "route":"{id}"
     * }
     */
    public function getById(int $id) : ResultSet {
        $result = $this->tokenBusiness->get($id);
        return $result;
    }

}
