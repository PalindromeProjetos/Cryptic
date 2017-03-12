<?php

namespace SmartFull\Data;

use SmartFull\Utils\ObjectBase;
use SmartFull\Data\Traits\ArrayTools;
use SmartFull\Data\Traits\Annotations;
use SmartFull\Data\Interfaces\ModelInterface;
use SmartFull\Interfaces\ObjectBaseInterface;
use SmartFull\Data\Interfaces\PolicyFieldInterface;

class Model extends ObjectBase implements ObjectBaseInterface, ModelInterface
{
    use Annotations;

    public function __construct(\stdClass $entity = null)
    {

        $this->setNotation(array(
            'instance'=>array('Entity'),
            'property'=>array('Policy','Column')
        ));

        $this->_notate = $this->getAnnotations($this);

		if ($entity == null) { return; }
			
		if ($entity instanceof \stdClass) {
			$this->hydrateModel($entity);
		}

	}

	public function __toString() : string {
		$entity = array();
		$fields = $this->_notate->property;

        foreach ($fields as $field=>$value) {
			$entity[$field] = $this->$field;
        }

		return self::arrayToJson($entity);
	}

	public function toArray () : array {
		$entity = array();
		$fields = $this->_notate->property;

		foreach ($fields as $field=>$value) {
			if(strlen($this->$field) != 0) {
				$entity[$field] = $this->$field;
			}
		}

		return $entity;
	}

    public function hydrateModel(\stdClass $entity) {
		
		if (!($entity instanceof \stdClass)) { return; }
				
		foreach ($entity as $field=>$value) {
			if(property_exists($this, $field)) {
				$this->$field = $value;
			}
		}
			
		//$this->policy();

	}

    protected function policy() {
        $notate = $this->_notate;
		
		//http://php.net/manual/en/language.oop5.typehinting.php
		
		//function teststring(string $string) { echo $string; }
		//function testinteger(integer $integer) { echo $integer; }
		//function testfloat(float $float) { echo $float; }

        $fields = self::arrayToObject($notate->property);

        foreach ($this as $field => $value) {
            $column = isset($fields->$field) ? $fields->$field : false;
            $hasPolicy = ( isset($column) && isset($column->Column->policy) );

            if( $hasPolicy )  {
                foreach ($column->Policy as $key => $policy) {
                    $method = $key . "Policy";
                    $result = $this->$method($policy,$value);
                    if ( $result->passed === false ) {
                        throw new \PDOException("<b>{$column->Column->description}</b> <br/>{$result->message}");
                    }
                }
            }
        }

        unset($submit);
        unset($notate);
    }

}
/*
array (size=1)
  'id' => 
    array (size=2)
      'Policy' => 
        object(stdClass)[4]
          public 'nullable' => boolean false
      'Column' => 
        object(stdClass)[5]
          public 'description' => string '' (length=0)
          public 'strategy' => string 'AUTO' (length=4)
          public 'type' => string 'integer' (length=7)
          public 'policy' => boolean false
          public 'logallow' => boolean true
          public 'default' => string '' (length=0)
*/