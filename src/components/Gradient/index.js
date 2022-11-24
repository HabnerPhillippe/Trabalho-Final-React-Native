import { LinearGradient } from "expo-linear-gradient";

export const Gradient = () => {
    return (
        <LinearGradient
            colors={['rgba(44, 0, 0, 1)', 'rgba(100, 10, 0, 1)', 'rgba(199, 48, 0, 1)', 'rgba(111, 0, 0, 0.56)']}
            style={{
                alignItems: 'center',
                mixBlendMode: "hardLight",
                height: '100%',
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: -1,
            }}
        />
    )
}