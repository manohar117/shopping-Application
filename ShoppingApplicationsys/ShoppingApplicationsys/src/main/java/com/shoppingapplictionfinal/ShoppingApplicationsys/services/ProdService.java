package com.shoppingapplictionfinal.ShoppingApplicationsys.services;

import java.util.List;

import com.shoppingapplictionfinal.ShoppingApplicationsys.model.Product;

public interface ProdService {
	
	public Product addProduct(Product product);
	
	public List<Product> getProducts();
	
	public Product getProduct(long productId);
	
	public Product updateProduct(Product product);
	
	public Product deleteProduct(long productId);
}
