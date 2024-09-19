import { View, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS,
} from "react-native-reanimated";

function Item({ index, perfomSwipe, color, length }) {
    var offsetX = useSharedValue(0);
    var offsetY = useSharedValue(0);

    const panGesture = Gesture.Pan()
        .onChange((event) => {
            offsetX.value = event.translationX;
            offsetY.value = event.translationY;
        })
        .onFinalize((event) => {
            if (
                Math.abs(event.translationX) > 120 ||
                Math.abs(event.translationY) > 120
            ) {
                runOnJS(perfomSwipe)();
            }
            offsetX.value = withTiming(0);
            offsetY.value = withTiming(0);
        });

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offsetX.value },
                { translateY: offsetY.value },
                {
                    scaleX: withTiming(
                        Math.max(
                            1 - (length - index - 1) / 10 + 0.05 * (length - index - 1),
                            0.8
                        )
                    ),
                },
                { translateY: withTiming(Math.min((length - index - 3) * 5, 10)) },
            ],

            zIndex: index,
            backgroundColor: color,
        };
    });

    return (
        <GestureDetector gesture={panGesture}>
            <Animated.View style={[styles.box, animatedStyles]}>
                <Image
                    source={{ uri: 'https://ik.imagekit.io/tvlk/blog/2022/06/thap-tokyo-nhat-ban-2.jpg?tr=c-at_max?tr=c-at_max' }}
                    style={styles.image}
                />
            </Animated.View>
        </GestureDetector>
    );
}

export default function Carousel() {
    const [data, setData] = useState([
        "#59B4C3",
        "#40A2E3",
        "#FDBF60",
        "#EFF396",
        "#9F70FD",
        "#74E291",
    ]);

    function perfomSwipe() {
        setData((oldData) => {
            var lastElement = oldData.pop();
            oldData.unshift(lastElement);
            return [...oldData];
        });
    }


    return (
        <View style={{ height: "100%" }}>
            <View style={styles.parent}>
                {data.map((item, index) => {
                    return (
                        <Item
                            key={item}
                            index={index}
                            perfomSwipe={perfomSwipe}
                            color={item}
                            length={data.length}

                        />
                    );
                })}
            </View>
        </View>
    );
}

var styles = StyleSheet.create({
    box: {
        width: 350,
        height: 350,
        borderWidth: 0.5,
        borderColor: "white",
        borderRadius: 20,
        position: "absolute",
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    parent: {
        flex: 1,
        alignItems: "center",
        top: "5%",
    },
});