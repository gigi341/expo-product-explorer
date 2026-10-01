import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const PRODUCTS = [
  { id: '1', name: 'Wireless Earbuds', price: 49.99 },
  { id: '2', name: 'Smart Watch', price: 129.0 },
  { id: '3', name: 'Phone Stand', price: 14.5 },
];

export function ProductList() {
  const theme = useTheme();

  return (
    <ThemedView type="backgroundElement" style={styles.container}>
      {PRODUCTS.map((product, index) => (
        <View
          key={product.id}
          style={[
            styles.row,
            index > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderColor: theme.backgroundSelected },
          ]}>
          <ThemedText type="small">{product.name}</ThemedText>
          <ThemedText type="smallBold">${product.price.toFixed(2)}</ThemedText>
        </View>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.four,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.two,
  },
});
