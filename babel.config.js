module.exports = {
    presets: [
        'babel-preset-expo',
        ['@babel/preset-env', {targets: {node: 'current'}}],
    ],
    plugins: ['nativewind/babel', 'react-native-reanimated/plugin'],
};
