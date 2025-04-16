import  { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ShoppingBagIcon,  ChevronRightIcon, MinusIcon, PlusIcon, ShareIcon, TruckIcon, RotateCwIcon, ShieldCheckIcon } from 'lucide-react';
import Button from '../components/Button';
import axios from 'axios';
const ProductDetailPage = () => {
  const {
    id
  } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({} as any);
  const orders  = {
    products: [
      {
        productId: product._id,
        quantity: quantity,
        price: product.price,
        name: product.name,
        image: product.image
      }
    ],
    totalAmount: product.price * quantity
  }
  const navigate = useNavigate();
  const addOrder = async () => {
    const res = await axios.post('http://localhost:5000/api/orders', orders);
    if(res.status === 201) {
      alert('Order added successfully');
      navigate('/cart')
    }
  }
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product/${id}`);
        setProduct(res.data);
        console.log(product)
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  return <div className="bg-[#F9F6F2] pt-24 pb-16 min-h-screen w-full">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm mb-8">
          <Link to="/" className="text-gray-500 hover:text-[#1A2A4A]">
            Home
          </Link>
          <ChevronRightIcon size={16} className="mx-2 text-gray-400" />
          <Link to={`/products?category=${product.category}`} className="text-gray-500 hover:text-[#1A2A4A]">
            {product.category}
          </Link>
          <ChevronRightIcon size={16} className="mx-2 text-gray-400" />
          <span className="text-[#1A2A4A] font-medium">{product.name}</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden mb-4 aspect-square">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
            {/* <div className="grid grid-cols-4 gap-2">
              {product.images.map((image: string | undefined, index: number) => (
                <button
                  key={index}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${
                    selectedImage === index ? 'border-[#D4AF37]' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div> */}
          </div>
          {/* Product Info */}
          <div>
            <div className="mb-2 flex items-center">
              <span className="text-sm bg-[#1A2A4A] text-white px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="ml-2 text-sm text-gray-500">
                SKU: {product.title}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[#1A2A4A] mb-2">
              {product.title}
            </h1>
            {/* <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className={i < Math.floor(product.rating) ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-300'} />)}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div> */}
            <div className="text-2xl font-bold text-[#1A2A4A] mb-6">
              ${product.price}
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            {/* <div className="mb-6">
              <h3 className="font-medium mb-2">Colors</h3>
              <div className="flex space-x-3">
                {product.colors.map((color: { name: string | number | bigint | ((prevState: string | null) => string | null) | null | undefined; value: any; }) => <button key={color.name} className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.name ? 'border-[#1A2A4A] scale-110' : 'border-transparent hover:scale-105'}`} style={{
                backgroundColor: color.value
              }} onClick={() => setSelectedColor(color.name)} aria-label={color.name} title={color.name}></button>)}
              </div>
            </div> */}
            {/* <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => <button key={size} className={`px-4 py-2 border rounded-md transition-colors ${selectedSize === size ? 'border-[#1A2A4A] bg-[#1A2A4A] text-white' : 'border-gray-300 hover:border-[#1A2A4A]'}`} onClick={() => setSelectedSize(size)}>
                    {size}
                  </button>)}
              </div>
            </div> */}
            <div className="mb-8">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-l-md hover:bg-gray-100" onClick={decrementQuantity} disabled={quantity <= 1}>
                  <MinusIcon size={16} />
                </button>
                <input type="number" min="1" value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="w-16 h-10 border-t border-b border-gray-300 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                <button className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-r-md hover:bg-gray-100" onClick={incrementQuantity}>
                  <PlusIcon size={16} />
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" size="lg" fullWidth onClick={addOrder}>
                <ShoppingBagIcon size={18} className="mr-2" />
                Add to Bag
              </Button>
              
            </div>
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <TruckIcon size={20} className="text-[#D4AF37] mr-2" />
                  <span className="text-sm">Free shipping over $100</span>
                </div>
                <div className="flex items-center">
                  <RotateCwIcon size={20} className="text-[#D4AF37] mr-2" />
                  <span className="text-sm">30-day returns</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheckIcon size={20} className="text-[#D4AF37] mr-2" />
                  <span className="text-sm">2-year warranty</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-6 text-gray-500 text-sm">
              <ShareIcon size={16} className="mr-2" />
              <span>Share:</span>
              <button className="ml-2 hover:text-[#1A2A4A]">Facebook</button>
              <span className="mx-1">•</span>
              <button className="hover:text-[#1A2A4A]">Twitter</button>
              <span className="mx-1">•</span>
              <button className="hover:text-[#1A2A4A]">Pinterest</button>
            </div>
          </div>
        </div>
        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              <button className="px-6 py-3 font-medium text-[#1A2A4A] border-b-2 border-[#D4AF37] whitespace-nowrap">
                Product Details
              </button>
             
            </div>
          </div>
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1A2A4A] mb-6">
            You May Also Like
          </h2>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => <ProductCard key={product.id} {...product} />)}
          </div> */}
        </div>
      </div>
    </div>;
};
export default ProductDetailPage;