import { useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ProductPage.module.scss";
import {
	addToCart,
	getCart,
	favProduct,
	getStoreItems,
} from "../../services/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as unfilledHeart } from "@fortawesome/free-regular-svg-icons";
import { Button } from "react-bootstrap";

const ProductPage = () => {
	const [products, setProducts, cart, setCart] = useOutletContext();

	// Product ID parameter in URL
	const { productId } = useParams();

	// Current Product, Variant (Size) states
	const [current, setCurrent] = useState({});
	const [variant, setVariant] = useState("none");

	// Reset Current if Products changes
	useEffect(() => {
		if (products.length > 0)
			setCurrent(
				products.find((product) => {
					return product.id == productId;
				}),
			);
	}, [products]);

	// Set variant when select option is changed
	const handleVariant = (e) => {
		console.log("Variant selected: ", e.target.value);
		setVariant(e.target.value);
	};

	// Adds current chosen product variant to cart in Database
	// Refetch cart and products
	const handleAddCart = async () => {
		await addToCart(current, variant);
		setCart(await getCart());
		setProducts(await getStoreItems());
	};

	// Change favourite state in database and refetch products
	const handleFav = async () => {
		await favProduct(current.id, !current.favourite);
		setProducts(await getStoreItems());
	};

	return (
		<div className={styles.ProductPage}>
			{/* Product Image */}
			<img
				src={current.image}
				alt={current.Name}
				className={styles.ProductPage__Img}
			/>
			{/* Product Info */}
			<div className={styles.ProductPage__Info}>
				<h3>
					{current.Name} {/* Like Button */}
					{current.favourite ? (
						<FontAwesomeIcon
							icon={filledHeart}
							onClick={handleFav}
							className={styles.Heart}
						/>
					) : (
						<FontAwesomeIcon
							icon={unfilledHeart}
							onClick={handleFav}
							className={styles.Heart}
						/>
					)}
				</h3>
				<p>${current.price}</p>

				{/* Size Selector */}
				<label htmlFor="variant">Size</label>
				<select
					name="variant"
					id="variant"
					defaultValue={"none"}
					onChange={handleVariant}
					required>
					<option disabled value="none">
						None
					</option>
					{current.variants ? (
						current.variants.map((variant, index) => {
							return (
								<option key={index} value={variant}>
									{variant}
								</option>
							);
						})
					) : (
						<></>
					)}
				</select>

				{/* Stock Checker */}
				{current?.["quantities"]?.[variant] > 0 ? (
					<p>{current["quantities"][variant]} In Stock</p>
				) : variant === "none" ? (
					<></>
				) : (
					<p>Out of Stock</p>
				)}

				{/* Add to Cart Button */}
				<Button
					variant="outline-success"
					onClick={handleAddCart}
					disabled={
						variant === "none" ||
						!current?.["quantities"]?.[variant]
					}>
					Add to Cart
				</Button>

				{/* Description */}
				<p>{current.description}</p>
			</div>
		</div>
	);
};

export default ProductPage;
