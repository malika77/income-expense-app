<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    use HasFactory;
    
    protected $table ='Income';

    protected $fillable = [
        'income_amount',
        'income_category',

    ];
}
