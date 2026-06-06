import {
	Text,
	View,
	StyleSheet,
	Button,
	Alert,
	ScrollView,
	Image,
} from "react-native";

export default function Index() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>FireManga🔥</Text>
				<Text>🔍</Text>
			</View>

			<View style={styles.fillerbar}>
				<Button title="Anime" color="#5e449a" onPress={() => {}} />
				<Button title="Manga" color="#5e449a" onPress={() => {}} />
			</View>

			<ScrollView style={{ width: "100%" }}>
				<View style={styles.cardgrid}>
					<View style={styles.card}>
						<Image
							source={{
								uri: "https://i.pinimg.com/originals/62/b9/5d/62b95d328e63f50825ff5eba267cacda.jpg",
							}}
							style={styles.cardImage}
						/>
						<View style={styles.overlaytext}>
							<Text
								style={{ color: "#ffffff", fontWeight: "bold" }}
							>
								JJk
							</Text>
						</View>
					</View>

					<View style={styles.card}>
						<Image
							source={{
								uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/bleach-anime-poster.jpeg",
							}}
							style={styles.cardImage}
						/>
						<View style={styles.overlaytext}>
							<Text
								style={{ color: "#ffffff", fontWeight: "bold" }}
							>
								Bleach
							</Text>
						</View>
					</View>

					<View style={styles.card}>
						<Image
							source={{
								uri: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/sharedimages/2024/06/dragon-ball-sparking-zero-cover-art.jpg",
							}}
							style={styles.cardImage}
						/>
						<View style={styles.overlaytext}>
							<Text
								style={{ color: "#ffffff", fontWeight: "bold" }}
							>
								Dragon Ball Super
							</Text>
						</View>
					</View>

					<View style={styles.card}>
						<Image
							source={{
								uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/jujutsu-kaisen-anime-poster.jpg",
							}}
							style={styles.cardImage}
						/>
						<View style={styles.overlaytext}>
							<Text
								style={{ color: "#ffffff", fontWeight: "bold" }}
							>
								JJK
							</Text>
						</View>
					</View>

					<View style={styles.card}>
						<Image
							source={{
								uri: "https://www.dexerto.com/cdn-image/wp-content/uploads/2024/06/24/dandadan-gets-global-theatrical-release-ahead-of-october-launch-2.jpg?width=1200&quality=75&format=auto",
							}}
							style={styles.cardImage}
						/>
						<View style={styles.overlaytext}>
							<Text
								style={{ color: "#ffffff", fontWeight: "bold" }}
							>
								Dandadan
							</Text>
						</View>
					</View>

					<View style={styles.card}>
						<Image
							source={{
								uri: "https://otakukart.com/wp-content/uploads/2024/08/Stands-in-JoJos-Bizarre-Adventure-4-1140x641.jpg",
							}}
							style={styles.cardImage}
						/>
						<View style={styles.overlaytext}>
							<Text
								style={{ color: "#ffffff", fontWeight: "bold" }}
							>
								JoJo's
							</Text>
						</View>
					</View>

					<View style={styles.card}>
						<Image
							source={{
								uri: "https://tse1.mm.bing.net/th/id/OIP.KFyyZilRpVenZJSJ5D-k8AHaKv?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
							}}
							style={styles.cardImage}
						/>
						<View style={styles.overlaytext}>
							<Text
								style={{ color: "#ffffff", fontWeight: "bold" }}
							>
								Chainshawman
							</Text>
						</View>
					</View>
					<View style={styles.card}>
						<Image
							source={{
								uri: "https://image.tmdb.org/t/p/original/xppeysfvDKVx775MFuH8Z9BlpMk.jpg",
							}}
							style={styles.cardImage}
						/>
						<View style={styles.overlaytext}>
							<Text
								style={{ color: "#ffffff", fontWeight: "bold" }}
							>
								Naruto
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>

			<View style={styles.footer}>
				<Button
					title="Alert"
					color="#5e449a"
					onPress={() => Alert.alert("Alert Button pressed")}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "flex-start",
		backgroundColor: "#030449",
		flexDirection: "column",
	},

	title: {
		fontSize: 25,
		fontWeight: "600",
		color: "#ffffff",
		textAlign: "left",
	},

	header: {
		flexDirection: "row",
		backgroundColor: "#030449",
		alignSelf: "stretch",
		paddingVertical: 9,
		paddingHorizontal: 23,
		borderBottomWidth: 1,
		borderColor: "rgba(255,255,255,0.3)",
		marginBottom: 4,
	},
	fillerbar: {
		flexDirection: "row",
		alignItems: "flex-start",
		paddingHorizontal: 16,
		paddingVertical: 4,
		marginBottom: 12,
	},
	cardgrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 10,
		padding: 10,
		alignSelf: "stretch",
		width: "100%",
	},

	card: {
		borderWidth: 1,
		borderColor: "#ffffff",
		height: 200,
		width: "47%",
		borderRadius: 10,
		overflow: "hidden",
	},
	overlaytext: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "rgba(0,0,0,0.5)",
		padding: 6,
	},

	cardImage: {
		overflow: "hidden",
		width: "100%",
		height: "100%",
		borderRadius: 10,
		resizeMode: "cover",
	},

	footer: {
		alignItems: "baseline",
		borderBottomWidth: 1,
		borderColor: "rgba(255,255,255,0.3)",
		alignSelf: "stretch",
		padding: 16,
		borderTopWidth: 1,
	},
});
