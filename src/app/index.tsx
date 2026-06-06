import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Alert,
	SafeAreaView,
} from "react-native";

export default function Index() {
	return (
		<SafeAreaView style={styles.safeArea}>
			{/* Main Task List Content */}
			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
			>
				{/* Header Section */}
				<View style={styles.header}>
					<Text style={styles.headerStar}>⭐</Text>
					<Text style={styles.headerTitle}>Today</Text>
				</View>

				{/* Calendar Event Banner */}
				<View style={styles.eventBanner}>
					<Text style={styles.eventText}>
						11:00 Work on Things Blog Post
					</Text>
				</View>

				{/* Filter Pills Row */}
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={styles.pillRow}
				>
					<View style={[styles.pill, styles.activePill]}>
						<Text style={styles.activePillText}>All</Text>
					</View>
					<View style={styles.pill}>
						<Text style={styles.pillText}>stefanzweifel.io</Text>
					</View>
					<View style={styles.pill}>
						<Text style={styles.pillText}>@Time...</Text>
					</View>
					<View style={styles.pill}>
						<Text style={styles.pillText}>@Prio...</Text>
					</View>
					<Text style={styles.pillDots}>•••</Text>
				</ScrollView>

				{/* General Tasks Section */}
				<View style={styles.taskList}>
					{/* Task 1 */}
					<View style={styles.taskRow}>
						<View style={styles.checkbox} />
						<View style={styles.taskContent}>
							<View style={styles.taskTitleRow}>
								<Text style={styles.taskTitle}>
									My Updated Things 3 Setup
								</Text>
								<View style={styles.inlinePill}>
									<Text style={styles.inlinePillText}>
										2 hours
									</Text>
								</View>
								<View style={styles.inlinePill}>
									<Text style={styles.inlinePillText}>
										Important
									</Text>
								</View>
							</View>
							<Text style={styles.taskSubtext}>
								✍️ Blog Post Ideas
							</Text>
						</View>
					</View>

					{/* Task 2 */}
					<View style={styles.taskRow}>
						<View style={styles.checkbox} />
						<View style={styles.taskContent}>
							<Text style={styles.taskTitle}>
								Wrap Secret Santa Present
							</Text>
							<Text style={styles.taskSubtext}>
								🎄 Christmas 2022
							</Text>
						</View>
					</View>

					{/* Task 3 */}
					<View style={styles.taskRow}>
						<View style={styles.checkbox} />
						<View style={styles.taskContent}>
							<Text style={styles.taskTitle}>
								Use ruffle-rs/ruffle to review ICQ Christmas
								Card
							</Text>
							<Text style={styles.taskSubtext}>✨ REDACTED</Text>
						</View>
					</View>
				</View>

				{/* This Evening Section */}
				<View style={styles.sectionHeaderRow}>
					<Text style={styles.sectionMoon}>🌙</Text>
					<Text style={styles.sectionHeaderTitle}>This Evening</Text>
				</View>

				<View style={styles.taskList}>
					{/* Evening Task 1 */}
					<View style={styles.taskRow}>
						<View style={styles.checkbox} />
						<View style={styles.taskContent}>
							<Text style={styles.taskTitle}>
								Activate Apple Fitness Plus
							</Text>
							<Text style={styles.taskSubtext}>
								👨‍👩‍👧 Family & Friends
							</Text>
						</View>
					</View>

					{/* Evening Task 2 */}
					<View style={styles.taskRow}>
						<View style={styles.checkbox} />
						<View style={styles.taskContent}>
							<View style={styles.taskTitleRow}>
								<Text style={styles.taskTitle}>
									Spaghetti Carbonara
								</Text>
								<View style={styles.inlinePill}>
									<Text style={styles.inlinePillText}>
										Dinner
									</Text>
								</View>
							</View>
							<Text style={styles.taskSubtext}>
								🍳 Meal Plan W50
							</Text>
						</View>
					</View>

					{/* Evening Task 3 */}
					<View style={styles.taskRow}>
						<View style={styles.checkbox} />
						<View style={styles.taskContent}>
							<Text style={styles.taskTitle}>
								Finish painting
							</Text>
							<Text style={styles.taskSubtext}>
								🧑‍🎨 The Starry Night
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>

			{/* Things 3 Footer + Alert Button */}
			<View style={styles.footer}>
				<Text style={styles.footerIcon}>＋</Text>
				<Text style={styles.footerIcon}>📅</Text>

				<TouchableOpacity
					style={styles.alertButton}
					onPress={() => Alert.alert("Alert Button pressed")}
				>
					<Text style={styles.alertButtonText}>Alert</Text>
				</TouchableOpacity>

				<Text style={styles.footerIcon}>➔</Text>
				<Text style={styles.footerIcon}>🔍</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#ffffff",
	},

	container: {
		flex: 1,
		paddingHorizontal: 24,
		backgroundColor: "#ffffff",
	},

	header: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 28,
		marginBottom: 16,
	},

	headerStar: {
		fontSize: 24,
		color: "#FFCC00",
		marginRight: 8,
	},

	headerTitle: {
		fontSize: 28,
		fontWeight: "800",
		color: "#2e2e2e",
	},

	eventBanner: {
		backgroundColor: "#f4f5f6",
		borderRadius: 6,
		paddingVertical: 8,
		paddingHorizontal: 12,
		marginBottom: 16,
	},

	eventText: {
		fontSize: 14,
		color: "#7a7a7a",
	},

	pillRow: {
		flexDirection: "row",
		marginBottom: 24,
		maxHeight: 35,
	},

	pill: {
		backgroundColor: "#f0f1f2",
		borderRadius: 12,
		paddingHorizontal: 10,
		paddingVertical: 4,
		marginRight: 6,
		alignSelf: "center",
	},

	activePill: {
		backgroundColor: "#7e8287",
	},

	pillText: {
		fontSize: 12,
		color: "#5d6063",
	},

	activePillText: {
		fontSize: 12,
		color: "#ffffff",
		fontWeight: "600",
	},

	pillDots: {
		color: "#9da1a6",
		fontSize: 14,
		alignSelf: "center",
		marginLeft: 4,
	},

	taskList: {
		marginBottom: 12,
	},

	taskRow: {
		flexDirection: "row",
		alignItems: "flex-start",
		paddingVertical: 10,
		borderBottomWidth: 0.5,
		borderColor: "#f0f0f0",
	},

	checkbox: {
		width: 17,
		height: 17,
		borderWidth: 1.5,
		borderColor: "#bcbcbc",
		borderRadius: 3,
		marginTop: 2,
		marginRight: 12,
	},

	taskContent: {
		flex: 1,
	},

	taskTitleRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
	},

	taskTitle: {
		fontSize: 15,
		color: "#333333",
		fontWeight: "400",
		lineHeight: 20,
	},

	taskSubtext: {
		fontSize: 12,
		color: "#8e8e93",
		marginTop: 2,
	},

	inlinePill: {
		backgroundColor: "#f2f2f7",
		borderRadius: 10,
		paddingHorizontal: 6,
		paddingVertical: 1,
		marginLeft: 6,
		borderWidth: 0.5,
		borderColor: "#d1d1d6",
	},

	inlinePillText: {
		fontSize: 10,
		color: "#636366",
	},

	sectionHeaderRow: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 24,
		marginBottom: 10,
	},

	sectionMoon: {
		fontSize: 16,
		marginRight: 8,
	},

	sectionHeaderTitle: {
		fontSize: 16,
		fontWeight: "700",
		color: "#2c3e50",
	},

	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 24,
		paddingVertical: 12,
		borderTopWidth: 0.5,
		borderColor: "#e5e5e5",
		backgroundColor: "#ffffff",
	},

	footerIcon: {
		fontSize: 18,
		color: "#9da1a6",
	},

	alertButton: {
		backgroundColor: "#4a90e2",
		paddingHorizontal: 20,
		paddingVertical: 6,
		borderRadius: 15,
	},

	alertButtonText: {
		color: "#ffffff",
		fontSize: 13,
		fontWeight: "600",
	},
});
