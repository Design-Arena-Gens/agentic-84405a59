'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedJacket, setSelectedJacket] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    size: 'M',
    address: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const jackets = [
    {
      id: 1,
      name: 'CAMPUS SUTRA Men Black Solid Hooded Puffer Jacket',
      brand: 'CAMPUS SUTRA',
      price: 1699,
      originalPrice: 3999,
      discount: 57,
      rating: 4.2,
      reviews: 328,
      image: '/api/placeholder/300/400',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      description: 'Stylish black puffer jacket with hood, perfect for winter'
    },
    {
      id: 2,
      name: 'Roadster Men Navy Blue Solid Quilted Jacket',
      brand: 'Roadster',
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      rating: 4.3,
      reviews: 542,
      image: '/api/placeholder/300/400',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Navy blue quilted jacket with zip closure'
    },
    {
      id: 3,
      name: 'HRX by Hrithik Roshan Men Olive Green Jacket',
      brand: 'HRX',
      price: 1899,
      originalPrice: 3799,
      discount: 50,
      rating: 4.4,
      reviews: 214,
      image: '/api/placeholder/300/400',
      sizes: ['M', 'L', 'XL', 'XXL'],
      description: 'Sporty olive green jacket with windproof fabric'
    },
    {
      id: 4,
      name: 'HIGHLANDER Men Maroon Hooded Bomber Jacket',
      brand: 'HIGHLANDER',
      price: 1799,
      originalPrice: 3599,
      discount: 50,
      rating: 4.1,
      reviews: 189,
      image: '/api/placeholder/300/400',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Trendy maroon bomber jacket with hood'
    },
    {
      id: 5,
      name: 'Mast & Harbour Men Charcoal Grey Padded Jacket',
      brand: 'Mast & Harbour',
      price: 1599,
      originalPrice: 3199,
      discount: 50,
      rating: 4.0,
      reviews: 275,
      image: '/api/placeholder/300/400',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      description: 'Comfortable charcoal grey padded jacket'
    },
    {
      id: 6,
      name: 'WROGN Men Black Slim Fit Leather Jacket',
      brand: 'WROGN',
      price: 1999,
      originalPrice: 4999,
      discount: 60,
      rating: 4.5,
      reviews: 412,
      image: '/api/placeholder/300/400',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Premium black faux leather jacket'
    }
  ];

  const handleBookNow = (jacket) => {
    setSelectedJacket(jacket);
    setShowBooking(true);
    setBookingConfirmed(false);
  };

  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  const handleViewOnMyntra = (jacket) => {
    window.open('https://www.myntra.com/jackets', '_blank');
  };

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>🧥 Myntra Winter Jacket Finder</h1>
        <p style={styles.subtitle}>Best Winter Jackets Under ₹2000</p>
      </header>

      {!showBooking ? (
        <div style={styles.container}>
          <div style={styles.grid}>
            {jackets.map((jacket) => (
              <div key={jacket.id} style={styles.card}>
                <div style={styles.imageContainer}>
                  <div style={styles.imagePlaceholder}>
                    <span style={styles.imageText}>🧥</span>
                  </div>
                  <div style={styles.discountBadge}>-{jacket.discount}%</div>
                </div>

                <div style={styles.cardContent}>
                  <h3 style={styles.brand}>{jacket.brand}</h3>
                  <p style={styles.productName}>{jacket.name}</p>
                  <p style={styles.description}>{jacket.description}</p>

                  <div style={styles.rating}>
                    <span style={styles.stars}>⭐ {jacket.rating}</span>
                    <span style={styles.reviews}>({jacket.reviews} reviews)</span>
                  </div>

                  <div style={styles.priceContainer}>
                    <span style={styles.price}>₹{jacket.price}</span>
                    <span style={styles.originalPrice}>₹{jacket.originalPrice}</span>
                  </div>

                  <div style={styles.sizes}>
                    <span style={styles.sizesLabel}>Sizes: </span>
                    {jacket.sizes.join(', ')}
                  </div>

                  <div style={styles.buttonGroup}>
                    <button
                      onClick={() => handleBookNow(jacket)}
                      style={styles.bookButton}
                    >
                      Book Now
                    </button>
                    <button
                      onClick={() => handleViewOnMyntra(jacket)}
                      style={styles.myntraButton}
                    >
                      View on Myntra
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={styles.bookingContainer}>
          {!bookingConfirmed ? (
            <div style={styles.bookingCard}>
              <button
                onClick={() => setShowBooking(false)}
                style={styles.backButton}
              >
                ← Back to Products
              </button>

              <h2 style={styles.bookingTitle}>Book Your Jacket</h2>

              <div style={styles.selectedProduct}>
                <h3>{selectedJacket.brand}</h3>
                <p>{selectedJacket.name}</p>
                <p style={styles.price}>₹{selectedJacket.price}</p>
              </div>

              <form onSubmit={handleSubmitBooking} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingDetails.name}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                    placeholder="Enter your full name"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                    placeholder="Enter your email"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingDetails.phone}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Select Size *</label>
                  <select
                    name="size"
                    value={bookingDetails.size}
                    onChange={handleInputChange}
                    required
                    style={styles.select}
                  >
                    {selectedJacket.sizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Delivery Address *</label>
                  <textarea
                    name="address"
                    value={bookingDetails.address}
                    onChange={handleInputChange}
                    required
                    style={styles.textarea}
                    placeholder="Enter your complete delivery address"
                    rows="3"
                  />
                </div>

                <button type="submit" style={styles.submitButton}>
                  Confirm Booking
                </button>
              </form>
            </div>
          ) : (
            <div style={styles.confirmationCard}>
              <div style={styles.successIcon}>✓</div>
              <h2 style={styles.confirmationTitle}>Booking Confirmed!</h2>
              <div style={styles.confirmationDetails}>
                <p><strong>Product:</strong> {selectedJacket.name}</p>
                <p><strong>Brand:</strong> {selectedJacket.brand}</p>
                <p><strong>Size:</strong> {bookingDetails.size}</p>
                <p><strong>Price:</strong> ₹{selectedJacket.price}</p>
                <p><strong>Name:</strong> {bookingDetails.name}</p>
                <p><strong>Email:</strong> {bookingDetails.email}</p>
                <p><strong>Phone:</strong> {bookingDetails.phone}</p>
                <p><strong>Delivery Address:</strong> {bookingDetails.address}</p>
              </div>
              <p style={styles.confirmationMessage}>
                Your booking has been confirmed! You will receive a confirmation email shortly.
                Expected delivery: 5-7 business days.
              </p>
              <button
                onClick={() => {
                  setShowBooking(false);
                  setBookingConfirmed(false);
                  setBookingDetails({ name: '', email: '', phone: '', size: 'M', address: '' });
                }}
                style={styles.continueButton}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#ff3f6c',
    color: 'white',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  title: {
    margin: '0 0 10px 0',
    fontSize: '2.5rem',
  },
  subtitle: {
    margin: 0,
    fontSize: '1.2rem',
    opacity: 0.9,
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
    padding: '20px 0',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  imageContainer: {
    position: 'relative',
    height: '350px',
    backgroundColor: '#e0e0e0',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  imageText: {
    fontSize: '80px',
  },
  discountBadge: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: '#ff3f6c',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  cardContent: {
    padding: '16px',
  },
  brand: {
    margin: '0 0 8px 0',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#282c3f',
  },
  productName: {
    margin: '0 0 8px 0',
    fontSize: '0.9rem',
    color: '#666',
  },
  description: {
    margin: '0 0 12px 0',
    fontSize: '0.85rem',
    color: '#888',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  },
  stars: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  reviews: {
    fontSize: '0.85rem',
    color: '#888',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#282c3f',
  },
  originalPrice: {
    fontSize: '1rem',
    color: '#888',
    textDecoration: 'line-through',
  },
  sizes: {
    fontSize: '0.85rem',
    color: '#666',
    marginBottom: '16px',
  },
  sizesLabel: {
    fontWeight: 'bold',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
  },
  bookButton: {
    flex: 1,
    padding: '12px',
    backgroundColor: '#ff3f6c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  myntraButton: {
    flex: 1,
    padding: '12px',
    backgroundColor: 'white',
    color: '#ff3f6c',
    border: '2px solid #ff3f6c',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  bookingContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  bookingCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  backButton: {
    padding: '8px 16px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
    fontSize: '0.9rem',
  },
  bookingTitle: {
    margin: '0 0 20px 0',
    color: '#282c3f',
  },
  selectedProduct: {
    padding: '16px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
    marginBottom: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    color: '#282c3f',
  },
  input: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  select: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  textarea: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    fontFamily: 'inherit',
  },
  submitButton: {
    padding: '14px',
    backgroundColor: '#ff3f6c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '8px',
  },
  confirmationCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '40px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  successIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: '#4caf50',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    margin: '0 auto 20px auto',
  },
  confirmationTitle: {
    color: '#282c3f',
    marginBottom: '20px',
  },
  confirmationDetails: {
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  confirmationMessage: {
    color: '#666',
    marginBottom: '24px',
    lineHeight: '1.6',
  },
  continueButton: {
    padding: '14px 32px',
    backgroundColor: '#ff3f6c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
