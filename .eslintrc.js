module.exports = {
    root: true,
    extends: [
        'marlon',
        '@react-native-community',
        'airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    plugins: ['jest'],
    rules: {
        'import/prefer-default-export': 'warn', // For temporary files with only 1 named export for now
        'react/destructuring-assignment': 'off', // const [value, setValue] = useState(props.value) <<< to avoid useless renaming
        'react/jsx-props-no-spreading': 'off', // See all svg icons
        'jsx-a11y/accessible-emoji': 'off', // Not possible in react-native
        '@typescript-eslint/no-explicit-any': 'warn', // Since we're using aliases for any (e.g. any$NotWorthIt, ...)
        '@typescript-eslint/camelcase': 'off', // Turned off due to generated graphql types having underscores
    },
    parser: '@typescript-eslint/parser',
}
