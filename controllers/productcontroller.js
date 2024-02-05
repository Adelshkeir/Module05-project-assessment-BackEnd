
import Product from '../models/productmodel.js';

const handleProductError = (res, error) => {
  res.status(500).json({ error: error.message });
};

const getAllProducts = (req, res) => {
  Product.find()
    .then(products => {
      res.json(products);
    })
    .catch(error => {
      handleProductError(res, error);
    });
};

const getProductById = (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    })
    .catch(error => {
      handleProductError(res, error);
    });
};

const addProduct = (req, res) => {
  // if (!req.user.isAdmin) {
  //   return res.status(403).json({ error: 'Admin access required' });
  // }
  const imagePath = req.file.path;
  const {  ...otherFields } = req.body;
  const newProduct = new Product({
    ...otherFields, 
    imageURLs: imagePath, 
  });

  newProduct.save()
    .then(product => {
      res.json(product);
    })
    .catch(error => {
      handleProductError(res, error);
    });
};

const updateProduct = (req, res) => {
  // if (!req.user.isAdmin) {
  //   return res.status(403).json({ error: 'Admin access required' });
  // }

  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(product => {
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    })
    .catch(error => {
      handleProductError(res, error);
    });
};

const deleteProduct = (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  Product.findByIdAndDelete(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    })
    .catch(error => {
      handleProductError(res, error);
    });
};
export default {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
};