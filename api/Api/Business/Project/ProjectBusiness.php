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
 *      "table":"project",
 *      "model":"\\Cryptic\\Api\\Models\\Project"
 * }
 */
class ProjectBusiness extends Business
{

}