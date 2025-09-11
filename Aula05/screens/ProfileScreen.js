import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.avatarWrapper}>
				<Image
					source={{ uri: 'https://i.pravatar.cc/200?img=64' }}
					style={styles.avatar}
				/>
				<View style={styles.iconBadge}>
					<FontAwesome name="camera" size={16} color="#fff" />
				</View>
			</View>
			<Text style={styles.name}>João Silva</Text>
			<Text style={styles.role}>Mobile Developer</Text>
			<FontAwesome name="heart" size={32} color="#EF4444" style={{ marginTop: 16 }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111827', padding: 24 },
	avatarWrapper: { position: 'relative' },
	avatar: { width: 140, height: 140, borderRadius: 70, borderWidth: 3, borderColor: '#2563EB' },
	iconBadge: { position: 'absolute', bottom: 6, right: 6, backgroundColor: '#2563EB', padding: 6, borderRadius: 20, borderWidth: 2, borderColor: '#fff' },
	name: { marginTop: 20, fontSize: 24, fontWeight: '700', color: '#fff' },
	role: { fontSize: 14, color: '#93A3B8', marginTop: 4 }
});