<?php

namespace Cryptic\Api\Models;

use SmartFull\Data\Model;

/**
 * @Entity {
 *      "table":"module",
 *      "logbook":true
 * }
 */
class Module extends Model
{

    /**
     * @Policy {"nullable":false}
     * @Column {"description":"", "strategy":"AUTO", "type":"integer", "policy":false, "logallow":true, "default":null}
     */
    public $id;

    /**
     * @Policy {"nullable":false}
     * @Column {"description":"", "type":"integer", "policy":true, "logallow":true, "default":null}
     */
    public $projectid;

    /**
     * @Policy {"nullable":false, "length":45}
     * @Column {"description":"", "type":"string", "policy":true, "logallow":true, "default":null}
     */
    public $name;

}