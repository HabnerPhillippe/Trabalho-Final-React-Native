import { LinearGradient } from "expo-linear-gradient";

export const Gradient = () => {
    return (
        <LinearGradient
            colors={['#000000', '#ff0000', '#ff0000', '#000000']}
            style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                top: 0,
                zIndex: -1,
            }}
        />
    )
}