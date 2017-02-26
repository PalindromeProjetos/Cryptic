<?php

namespace Cryptic\Api\Models;

use SmartFull\Data\Model;

/**
 * @Entity {
 *      "table":"users",
 *      "logbook":true
 * }
 */
class Users extends Model
{

    /**
     * @Policy {"nullable":false}
     * @Column {"description":"", "strategy":"AUTO", "type":"integer", "policy":false, "logallow":true, "default":null}
     */
    public $id;

    /**
     * @Policy {"nullable":false, "length":80}
     * @Column {"description":"", "type":"string", "policy":true, "logallow":true, "default":null}
     */
    public $username;

    /**
     * @Policy {"nullable":true, "length":80}
     * @Column {"description":"", "type":"string", "policy":true, "logallow":true, "default":null}
     */
    public $password;

    /**
     * @Policy {"nullable":true}
     * @Column {"description":"", "type":"boolean", "policy":true, "logallow":true, "default":true}
     */
    public $isactive;

    /**
     * @Policy {"nullable":false, "length":80}
     * @Column {"description":"", "type":"string", "policy":true, "logallow":true, "default":null}
     */
    public $fullname;

}