import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link } from '@react-pdf/renderer';

// Register fonts using reliable CDN links (jsDelivr)
Font.register({
    family: 'Space Grotesk',
    src: 'https://cdn.jsdelivr.net/fontsource/fonts/space-grotesk@latest/latin-700-normal.ttf',
    fontWeight: 700
});

Font.register({
    family: 'Inter',
    src: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf',
    fontWeight: 400
});

// Theme Colors
const theme = {
    bg: '#020617',         // Slate 950
    cardBg: '#1e293b',     // Slate 800
    textMain: '#f8fafc',   // Slate 50
    textMuted: '#94a3b8',  // Slate 400
    primary: '#3b82f6',    // Blue 500
    accent: '#61dafb',     // Cyan
};

// Compact Styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: theme.bg,
        color: theme.textMain,
        padding: 24, // Reduced from 30
        fontFamily: 'Inter',
    },
    header: {
        marginBottom: 15, // Reduced from 30
        borderBottomWidth: 1,
        borderBottomColor: theme.cardBg,
        paddingBottom: 10, // Reduced from 20
    },
    name: {
        fontSize: 26, // Reduced from 32
        marginTop: 4,
        fontFamily: 'Space Grotesk',
        fontWeight: 'bold',
        color: theme.textMain,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    subtitle: {
        fontSize: 12, // Reduced from 14
        color: theme.primary,
        marginTop: 2,
        marginBottom: 4,
        fontFamily: 'Space Grotesk',
    },
    contactRow: {
        flexDirection: 'row',
        marginTop: 8, // Reduced from 15
        gap: 12,
        fontSize: 8, // Reduced from 9
        color: theme.textMuted,
    },
    section: {
        marginBottom: 12, // Reduced from 20
        backgroundColor: theme.cardBg,
        padding: 10, // Reduced from 15
        borderRadius: 6,
    },
    sectionTitle: {
        fontSize: 12, // Reduced from 14
        fontFamily: 'Space Grotesk',
        fontWeight: 'bold',
        color: theme.textMain,
        marginBottom: 6, // Reduced from 10
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.1)',
        paddingBottom: 4,
    },
    text: {
        fontSize: 9, // Reduced from 10
        lineHeight: 1.4, // Reduced from 1.6
        color: theme.textMuted,
    },
    jobContainer: {
        marginBottom: 8, // Reduced from 15
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 1,
    },
    jobTitle: {
        fontSize: 10, // Reduced from 11
        fontWeight: 'bold',
        color: theme.textMain,
    },
    company: {
        fontSize: 9, // Reduced from 10
        color: theme.primary,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    period: {
        fontSize: 8, // Reduced from 9
        color: theme.textMuted,
    },
    skillSection: {
        marginTop: 4,
    },
    skillLabel: {
        fontSize: 9, // Reduced from 10
        fontWeight: 'bold',
        color: theme.textMain,
        marginBottom: 3,
        marginTop: 6,
    },
    skillBadgeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4, // Reduced from 6
    },
    skillBadge: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: theme.textMain,
        fontSize: 8, // Reduced from 9
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 3,
    },
});

const ResumePDF = ({ content }) => (
    <Document>
        <Page size="A4" style={styles.page}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={{ fontSize: 9, color: theme.accent, letterSpacing: 1, fontWeight: 'bold' }}>HI THERE, I'M</Text>
                <Text style={styles.name}>{content.profile.name}</Text>
                <Text style={styles.subtitle}>{content.profile.title} | {content.profile.subtitle}</Text>

                <View style={styles.contactRow}>
                    <Text>{content.profile.location}</Text>
                    <Text>•</Text>
                    <Text>{content.profile.phone}</Text>
                    <Text>•</Text>
                    <Link src={content.profile.website} style={{ color: theme.textMuted, textDecoration: 'none' }}>
                        <Text>Portfolio</Text>
                    </Link>
                    <Text>•</Text>
                    <Text>{content.profile.email}</Text>
                </View>
            </View>

            {/* Profile */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>PROFESSIONAL PROFILE</Text>
                <Text style={styles.text}>{content.profile.summary}</Text>
            </View>

            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>TECHNICAL STACK</Text>

                <View style={styles.skillSection}>
                    <Text style={styles.skillLabel}>Backend Engineering</Text>
                    <View style={styles.skillBadgeContainer}>
                        {content.skills.backend.map((skill, index) => (
                            <Text key={index} style={styles.skillBadge}>{skill}</Text>
                        ))}
                    </View>
                </View>

                <View style={styles.skillSection}>
                    <Text style={styles.skillLabel}>Frontend Development</Text>
                    <View style={styles.skillBadgeContainer}>
                        {content.skills.frontend.map((skill, index) => (
                            <Text key={index} style={styles.skillBadge}>{skill}</Text>
                        ))}
                    </View>
                </View>
            </View>

            {/* Experience */}
            <View style={{ ...styles.section, flex: 1 }}>
                <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
                {content.experience.map((job, index) => (
                    <View key={index} style={styles.jobContainer}>
                        <View style={styles.jobHeader}>
                            <Text style={styles.jobTitle}>{job.role}</Text>
                            <Text style={styles.period}>{job.period}</Text>
                        </View>
                        <Text style={styles.company}>{job.company}</Text>
                        <Text style={styles.text}>{job.description}</Text>
                    </View>
                ))}
            </View>

        </Page>
    </Document>
);

export default ResumePDF;
