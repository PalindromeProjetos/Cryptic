<?php

namespace Cryptic\Api\Controllers;

use SmartFull\Utils\Strings;
use SmartFull\Data\ResultSet;
use SmartFull\Data\Controller;
use SmartFull\Data\PageRequest;
use Cryptic\Api\Business\ProjectBusiness;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

/**
 * @RoutePrefix {
 *      "name":"projects"
 * }
 */
class ProjectController extends Controller
{

    protected $projectBusiness = null;

    public function __construct(?Request &$request, ?Response &$response)
    {
        parent::__construct($request, $response);
        $this->projectBusiness = new ProjectBusiness();
    }

    /**
     * @HttpGet {
     *      "route":"list"
     * }
     */
    public function getAll(int $start = 0, int $limit = 10) : ResultSet {
        $pager  = new PageRequest(array("start"=>$start, "limit"=>$limit));

        $result = $this->projectBusiness->getAll($pager);

        return $result;
    }

    /**
     * @HttpGet {
     *      "route":"{id}"
     * }
     */
    public function getById(int $id) : ResultSet {
        $result = $this->projectBusiness->get($id);
        return $result;
    }

}
