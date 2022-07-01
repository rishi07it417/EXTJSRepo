package com.integration.test.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/student")
public class TestController {
	
	
	@GetMapping("/getRecords")
	public List<Map> getDivisions() {
		System.out.println("INSIDE>>>>>>>>>>>>>");
		
		List<Map> arr = new ArrayList();
		Map<String,String> obj = new HashMap();
		obj.put("name", "Rishi");
		obj.put("id", "O9IT");
		obj.put("stream", "IT");
		arr.add(obj);

		obj = new HashMap();
		obj.put("name", "Maulik");
		obj.put("id", "O9EC");
		obj.put("stream", "EC");
		arr.add(obj);

		
		obj = new HashMap();
		obj.put("name", "Aud");
		obj.put("id", "O9ME");
		obj.put("stream", "ME");
		arr.add(obj);

		System.out.println("arr::"+arr.toString());

		return arr;
	}

}
