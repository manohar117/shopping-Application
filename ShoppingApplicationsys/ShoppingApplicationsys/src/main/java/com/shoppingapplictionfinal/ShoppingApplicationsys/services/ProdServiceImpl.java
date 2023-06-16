package com.shoppingapplictionfinal.ShoppingApplicationsys.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shoppingapplictionfinal.ShoppingApplicationsys.dao.ProductDao;
import com.shoppingapplictionfinal.ShoppingApplicationsys.model.Product;

@Service
public class ProdServiceImpl implements ProdService {
	
	@Autowired
	private ProductDao productDao;

	@Override
	public Product addProduct(Product product) {
		productDao.save(product);
		return product;
	}

	@Override
	public List<Product> getProducts() {
		
		
		return productDao.findAll();
	}

	@Override
	public Product getProduct(long productId) {
		
		return productDao.findById(productId).get();
	}

	@Override
	public Product updateProduct(Product product) {
		 productDao.save(product);
		 return product;
	}

	@Override
	public Product deleteProduct(long productId) {
		
		Product product=productDao.findById(productId).get();
		productDao.delete(product);
		return product;
	}

}
