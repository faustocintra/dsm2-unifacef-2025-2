import { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView,
	Alert,
} from 'react-native';

export default function ProfileScreen() {
	const [avatarError, setAvatarError] = useState(false);

	const user = {
		name: 'João Silva',
		username: '@joaosilva',
		bio: 'Desenvolvedor mobile | Apaixonado por tecnologia e café ☕',
		location: 'Franca - SP',
		followers: 1280,
		following: 345,
		projects: 27,
		interests: ['React Native', 'UI/UX', 'Node.js', 'Games', 'IA'],
	};

	const handleEdit = () => {
		Alert.alert('Editar Perfil', 'Funcionalidade não implementada ainda.');
	};

	const handleLogout = () => {
		Alert.alert('Logout', 'Sessão finalizada (exemplo).');
	};

	const Stat = ({ label, value }) => (
		<View style={styles.statBox}>
			<Text style={styles.statValue}>{value}</Text>
			<Text style={styles.statLabel}>{label}</Text>
		</View>
	);

	return (
		<ScrollView style={styles.container} contentContainerStyle={styles.content}>
			<View style={styles.header}>
				<View style={styles.avatarWrapper}>
					{avatarError ? (
						<View style={[styles.avatar, styles.avatarFallback]}>
							<Text style={styles.avatarInitials}>JS</Text>
						</View>
					) : (
						<Image
							source={{ uri: 'https://i.pravatar.cc/240?img=12' }}
							style={styles.avatar}
							onError={() => setAvatarError(true)}
						/>
					)}
				</View>
				<Text style={styles.name}>{user.name}</Text>
				<Text style={styles.username}>{user.username}</Text>
				<Text style={styles.bio}>{user.bio}</Text>
				<Text style={styles.location}>{user.location}</Text>
				<View style={styles.actionsRow}>
					<TouchableOpacity style={styles.primaryButton} onPress={handleEdit}>
						<Text style={styles.primaryButtonText}>Editar Perfil</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.secondaryButton} onPress={handleLogout}>
						<Text style={styles.secondaryButtonText}>Sair</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.statsCard}>
				<Stat label="Seguidores" value={user.followers} />
				<Stat label="Seguindo" value={user.following} />
				<Stat label="Projetos" value={user.projects} />
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Interesses</Text>
				<View style={styles.tagsWrap}>
					{user.interests.map((tag) => (
						<View key={tag} style={styles.tag}>
							<Text style={styles.tagText}>{tag}</Text>
						</View>
					))}
				</View>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Sobre</Text>
				<Text style={styles.paragraph}>
					Profissional focado em desenvolvimento de interfaces performáticas e
					acessíveis. Curto explorar novas tecnologias, contribuir com a
					comunidade e criar experiências que as pessoas adoram usar.
				</Text>
			</View>

			<Text style={styles.footer}>Versão 1.0.0 • Demo Profile Screen</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#0F1115' },
	content: { padding: 24, paddingBottom: 48 },
	header: { alignItems: 'center', marginBottom: 28 },
	avatarWrapper: {
		width: 140,
		height: 140,
		borderRadius: 70,
		padding: 4,
		backgroundColor: '#1E2630',
		shadowColor: '#000',
		shadowOpacity: 0.5,
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 8,
		elevation: 6,
		marginBottom: 12,
	},
	avatar: { width: '100%', height: '100%', borderRadius: 70 },
	avatarFallback: { justifyContent: 'center', alignItems: 'center' },
	avatarInitials: { fontSize: 40, fontWeight: '600', color: '#fff' },
	name: { fontSize: 26, fontWeight: '700', color: '#FFFFFF' },
	username: { fontSize: 15, color: '#8EA2B4', marginTop: 2 },
	bio: {
		fontSize: 14,
		color: '#C5D1DB',
		textAlign: 'center',
		marginTop: 10,
		lineHeight: 20,
	},
	location: { fontSize: 13, color: '#647A8C', marginTop: 6 },
	actionsRow: {
		flexDirection: 'row',
		gap: 12,
		marginTop: 18,
	},
	primaryButton: {
		backgroundColor: '#2563EB',
		paddingHorizontal: 18,
		paddingVertical: 10,
		borderRadius: 8,
	},
	primaryButtonText: { color: '#FFFFFF', fontWeight: '600' },
	secondaryButton: {
		backgroundColor: '#1E2630',
		paddingHorizontal: 18,
		paddingVertical: 10,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#2D3A45',
	},
	secondaryButtonText: { color: '#C5D1DB', fontWeight: '500' },
	statsCard: {
		flexDirection: 'row',
		backgroundColor: '#151A21',
		borderRadius: 16,
		paddingVertical: 18,
		justifyContent: 'space-around',
		marginBottom: 28,
		borderWidth: 1,
		borderColor: '#1F252D',
	},
	statBox: { alignItems: 'center', minWidth: 90 },
	statValue: { color: '#FFFFFF', fontSize: 20, fontWeight: '700' },
	statLabel: { color: '#8EA2B4', fontSize: 12, marginTop: 4 },
	section: { marginBottom: 28 },
	sectionTitle: {
		color: '#FFFFFF',
		fontSize: 18,
		fontWeight: '600',
		marginBottom: 12,
	},
	tagsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
	tag: {
		backgroundColor: '#1E2630',
		paddingHorizontal: 14,
		paddingVertical: 6,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#2A3540',
	},
	tagText: { color: '#C5D1DB', fontSize: 12, fontWeight: '500' },
	paragraph: { color: '#C5D1DB', fontSize: 14, lineHeight: 20 },
	footer: {
		textAlign: 'center',
		color: '#3E4C58',
		fontSize: 12,
		marginTop: 12,
	},
});
