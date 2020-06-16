<?php 

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;

class BaseApiController extends Controller {

	public function createResponse($data, $statusCode = 200) {
		return response()->json([
			'data' => $data
		], $statusCode);
	}

	public function createErrorResponse($message, $statusCode = 500) {
		return response()->json([
			'error' => [
				'status' => $statusCode,
				'message' => $message,
			]
		], $statusCode);
	}
}