<template>
    <Navbar />
    <img class="banner" src="../assets/ProductListing/banner.png" alt="">
    <div class="header">
        <p>PUMA X PERKS AND MINI</p>
        <p>COLLECTİON</p>
    </div>
    <div class="products">
        <div class="product" v-for="product in products" :key="product.id">
            <img :src="product.image" alt="Product Image">
            <p>{{ product.name }}</p>
            <p>{{ product.brand }}</p>
            <p>{{ product.price }}</p>
        </div>
    </div>
    <button>BROWSE COLLECTİONS</button>
    <div class="line"></div>
    <Footer />
</template>
  
<style>
.banner {
    margin-top: 60px;
    width: 100vw;
}

.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 4px;
    font-size: 23px;
    line-height: 2px;
    font-weight: 100;
    margin: 50px 0;
}

.products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 2px;
    margin: 30px 10px;
}

.product img {
    margin-bottom: 20px;
}

.product :nth-child(4) {
    font-weight: bold;
}

button {
    border: 1px solid black;
    color: black;
    background-color: white;
    height: 45px;
    padding: 0 20px;
    letter-spacing: 4px;
    font-size: 16px;
    cursor: pointer;
    display: block;
    /* or inline-block, depending on your layout */
    margin: 40px auto;
}

.line {
    border-bottom: 1px solid rgba(128, 128, 128, 0.361);
    width: 87%;
    margin: 80px auto;
}
@media (max-width: 767px) {
  .banner {
    content: url('../assets/ProductListing/banner2.png');
    display: block;
    margin: 40px auto;
  }
  img{
    width: 100%;
  }
  .product{
    width: 100%;
  }
}
</style>
  
<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
    name: 'Products',
    data() {
        return {
            products: [
                {
                    id: 1,
                    image: require('@/assets/ProductListing/Rectangle-1.png'),
                    name: 'PUMA X P.A.M. Men',
                    brand: 'Printed T-Shirt',
                    price: '70.00 USD'
                },
                {
                    id: 2,
                    image: require('@/assets/ProductListing/Rectangle-2.png'),
                    name: 'PUMA X P.A.M. Women',
                    brand: 'Half Zipper Sweatshirt',
                    price: "100.00 USD"
                },
                {
                    id: 3,
                    image: require('@/assets/ProductListing/Rectangle-3.png'),
                    name: 'PUMA X P.A.M. Men',
                    brand: 'Puffer Jacket',
                    price: '700.00 USD'
                },
                {
                    id: 4,
                    image: require('@/assets/ProductListing/Rectangle-4.png'),
                    name: 'PUMA X P.A.M. Men',
                    brand: 'Puffer Jacket',
                    price: '500.00 USD'
                },
                {
                    id: 5,
                    image: require('@/assets/ProductListing/Rectangle-5.png'),
                    name: 'PUMA X P.A.M. Men',
                    brand: 'Pollar Jacket',
                    price: '162.00 USD'
                },
                {
                    id: 6,
                    image: require('@/assets/ProductListing/Rectangle-6.png'),
                    name: 'PUMA X P.A.M. Men',
                    brand: 'Cargo Pants',
                    price: '520.00 USD'
                },

            ]
        }
    },
    methods: {
        // Your methods go here
    },
    components: {
        Navbar,
        Footer
    }
}
</script>
  