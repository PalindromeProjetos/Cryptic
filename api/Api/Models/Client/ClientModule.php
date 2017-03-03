<?php

namespace Cryptic\Api\Models;

use SmartFull\Data\Model;

/**
 * @Entity {
 *      "table":"clientmodule",
 *      "logbook":true
 * }
 */
class ClientModule extends Model
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
    public $clientid;

    /**
     * @Policy {"nullable":false}
     * @Column {"description":"", "type":"integer", "policy":true, "logallow":true, "default":null}
     */
    public $moduleid;

}