import { View, Pressable, useWindowDimensions } from "react-native";
import { Text } from "react-native-paper";
import { router } from "expo-router";
import { Image } from "expo-image";
import { formatCurrency } from "@/utils/formatCurrency";

export const StockCard = ({
  ticker,
  price,
  companyName,
  priceChange,
  priceChangePercentage,
  image,
}: {
  ticker: string;
  image: string;
  companyName: string;
  price: number;
  priceChange: number;
  priceChangePercentage: number;
}) => {
  const { width } = useWindowDimensions();
  return (
    <Pressable
      style={{
        flexDirection: "row",
        marginVertical: 10,
        paddingHorizontal: 10,
        height: 60,
      }}
      onPress={() => router.push(`/${ticker}`)}
    >
      <Image
        source={image}
        style={{ width: 50, height: 50 }}
        contentFit="contain"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: width - 75,
          paddingLeft: 15,
        }}
      >
        <View>
          <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
            {ticker}
          </Text>
          <Text>{companyName}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
            {formatCurrency(price)}
          </Text>
          <Text
            variant="titleMedium"
            style={{
              color:
                priceChange < 0
                  ? "red"
                  : priceChange > 0
                  ? "lightgreen"
                  : "auto",
            }}
          >
            {formatCurrency(priceChange)}{" "}
            {formatCurrency(priceChangePercentage.toFixed(2))}%
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
