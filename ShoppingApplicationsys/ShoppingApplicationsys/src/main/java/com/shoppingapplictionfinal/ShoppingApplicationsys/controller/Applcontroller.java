package com.shoppingapplictionfinal.ShoppingApplicationsys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shoppingapplictionfinal.ShoppingApplicationsys.model.Product;
import com.shoppingapplictionfinal.ShoppingApplicationsys.services.ProdService;

@RestController
@CrossOrigin
public class Applcontroller {
     
	@Autowired 
	private ProdService prodservice;
	@PostMapping("/product")
	public Product addProduct(@RequestBody Product product) {
		return this.prodservice.addProduct(product);
		
	}
	
	@GetMapping("/products")
	public List<Product> getProducts(){
		return this.prodservice.getProducts();
	}
	
	@GetMapping("/products/{productId}")
	public Product getProduct(@PathVariable String productId) {
		return this.prodservice.getProduct(Long.parseLong(productId));
	}
	
	@PutMapping("/product")
	public Product updateProduct(@RequestBody Product product) {
		return this.prodservice.updateProduct(product);
	}
	
	@DeleteMapping("/product/{poductId}")
	public Product deleteProduct(@PathVariable String productId) {
		return this.prodservice.deleteProduct(Long.parseLong(productId));
	}
	 
}
