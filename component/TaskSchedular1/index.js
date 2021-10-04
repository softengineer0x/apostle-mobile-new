import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';

import HChart from './HChart';

const fontSizeLg = 12;
const fontSizeMd = 9;
const fontSizeSm = 6;

const paddingLg = 10;
const paddingMd = 7;
const paddingSm = 5;
const marginLg = 10;
const margingMd = 7;
const margingSm = 5;

const step1 = 180; // 1/3
const step2 = 90; // 1/5
// 1152 px
const styles = StyleSheet.create({
    dFlex: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexCol: {
        flexDirection: 'column',
    },
    dateBar: {
        fontSize: fontSizeMd,
        color: 'gray',
        marginLeft: step1, 
    },
    timeBar: {
        fontSize: fontSizeSm,
        marginLeft: step2,
    },
    timeTitle: {
        fontSize: fontSizeSm,
        paddingTop: paddingSm,
        paddingBottom: paddingSm,
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: 'center',
    },
    timePoint: {
        fontSize: fontSizeSm,
        paddingTop: paddingSm,
        paddingBottom: paddingSm,
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: 'center',
    },
    borderTopBox: {
        borderTopColor: 'gray',
        borderTopWidth: 1,
        borderStyle: 'solid',
    },
    borderLeftBox: {
        borderLeftColor: 'gray',
        borderLeftWidth: 1,
        borderStyle: 'solid',
    },
    borderRightBox: {
        borderRightColor: 'gray',
        borderRightWidth: 1,
        borderStyle: 'solid',
    },
    borderBottomBox: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    center: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    hcenter: {
        alignItems: 'center'
    },
    vcenter: {
        justifyContent: 'center', 
    },
    mainText: {
        color: 'gray',
    }
})

export default class TaskSchedular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 1154,
            height: 1000
        }
    }
    componentDidMount () {
        this.setState({
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        })
    }
    render() {
        let {
            width,
            height
        } = this.state;
        return (
            <View style={{width: width, height: height, paddingTop: 70, backgroundColor: 'black'}}>
                <View style={[styles.dateBar, styles.borderTopBox, styles.borderLeftBox, styles.borderRightBox]} >
                    <Text style={styles.mainText}>AUGUST 10.2021</Text>
                </View>
                <View style={[styles.timeBar, styles.dFlex]} >
                    <Text style={[styles.timeTitle, styles.mainText, styles.borderTopBox, styles.borderLeftBox, styles.borderRightBox, {width: (step1 - step2) / 2}]}>EST TIME</Text>
                    <Text style={[styles.timeTitle, styles.mainText, styles.borderTopBox, styles.borderRightBox, {width: (step1 - step2) / 2}]}>ACTUAL TIME</Text>
                    {/* <View style={style.dFlex}> */}
                        {['7', '7:30', '8', '8:30', '9', '9:30', '10', '10:30', '11', '11:30'].map(timePoint => (
                            <Text style={[styles.timePoint, styles.mainText, styles.borderTopBox, styles.borderRightBox, { width: (width - step1) / 10}]} key={timePoint}>{timePoint} AM</Text>
                        ))}
                    {/* </View> */}
                </View>
                <View style={styles.dFlex}>
                    <View style={{width: step1}}>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <Text style={[{fontSize: fontSizeLg, width: step2}, styles.mainText, styles.borderTopBox, styles.borderLeftBox,]}>🔽Preparation</Text>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>90m</Text>
                                </View>
                                <View style={[{flexGrow: 1}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>93m</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderTopBox, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>Cut 23g of cabbage</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>10m</Text>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text
                                        style={[{paddingTop: 1, paddingBottom: 1, paddingLeft: paddingSm, paddingRight: paddingSm, fontSize: fontSizeSm, borderRadius: 5}, styles.borderTopBox, styles.borderRightBox, styles.borderBottomBox, styles.borderLeftBox, styles.mainText]}
                                        onPress={() => console.log("--")}
                                    >END</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>Slice 24 onions</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text
                                        style={[{paddingTop: 1, paddingBottom: 1, paddingLeft: paddingSm, paddingRight: paddingSm, fontSize: fontSizeSm, borderRadius: 5}, styles.borderTopBox, styles.borderRightBox, styles.borderBottomBox, styles.borderLeftBox, styles.mainText]}
                                        onPress={() => console.log("--")}
                                    >START</Text>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>Pool 8 potatoes</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text
                                        style={[{paddingTop: 1, paddingBottom: 1, paddingLeft: paddingSm, paddingRight: paddingSm, fontSize: fontSizeSm, borderRadius: 5}, styles.borderTopBox, styles.borderRightBox, styles.borderBottomBox, styles.borderLeftBox, styles.mainText]}
                                        onPress={() => console.log("--")}
                                    >START</Text>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <Text style={[{fontSize: fontSizeLg, width: step2}, styles.mainText, styles.borderTopBox, styles.borderLeftBox,]}>🔽Cooking</Text>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text style={[{fontSize: fontSizeSm}, styles.mainText]}></Text>
                                </View>
                                <View style={[{flexGrow: 1}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text style={[{fontSize: fontSizeSm}, styles.mainText]}></Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderTopBox, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>Toast buns</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text
                                        style={[{paddingTop: 1, paddingBottom: 1, paddingLeft: paddingSm, paddingRight: paddingSm, fontSize: fontSizeSm, borderRadius: 5}, styles.borderTopBox, styles.borderRightBox, styles.borderBottomBox, styles.borderLeftBox, styles.mainText]}
                                        onPress={() => console.log("--")}
                                    >START</Text>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>Sautee ground beef</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text
                                        style={[{paddingTop: 1, paddingBottom: 1, paddingLeft: paddingSm, paddingRight: paddingSm, fontSize: fontSizeSm, borderRadius: 5}, styles.borderTopBox, styles.borderRightBox, styles.borderBottomBox, styles.borderLeftBox, styles.mainText]}
                                        onPress={() => console.log("--")}
                                    >START</Text>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox]}>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>Apply onions</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text
                                        style={[{paddingTop: 1, paddingBottom: 1, paddingLeft: paddingSm, paddingRight: paddingSm, fontSize: fontSizeSm, borderRadius: 5}, styles.borderTopBox, styles.borderRightBox, styles.borderBottomBox, styles.borderLeftBox, styles.mainText]}
                                        onPress={() => console.log("--")}
                                    >START</Text>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <Text style={[{fontSize: fontSizeLg, width: step2}, styles.mainText, styles.borderTopBox, styles.borderLeftBox,]}>🔽Packaging</Text>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text style={[{fontSize: fontSizeSm}, styles.mainText]}></Text>
                                </View>
                                <View style={[{flexGrow: 1}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text style={[{fontSize: fontSizeSm}, styles.mainText]}></Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderTopBox, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>Prepare utensils</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text
                                        style={[{paddingTop: 1, paddingBottom: 1, paddingLeft: paddingSm, paddingRight: paddingSm, fontSize: fontSizeSm, borderRadius: 5}, styles.borderTopBox, styles.borderRightBox, styles.borderBottomBox, styles.borderLeftBox, styles.mainText]}
                                        onPress={() => console.log("--")}
                                    >START</Text>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>Apply Stickers</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text
                                        style={[{paddingTop: 1, paddingBottom: 1, paddingLeft: paddingSm, paddingRight: paddingSm, fontSize: fontSizeSm, borderRadius: 5}, styles.borderTopBox, styles.borderRightBox, styles.borderBottomBox, styles.borderLeftBox, styles.mainText]}
                                        onPress={() => console.log("--")}
                                    >START</Text>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox]}>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>Package all burgers</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text
                                        style={[{paddingTop: 1, paddingBottom: 1, paddingLeft: paddingSm, paddingRight: paddingSm, fontSize: fontSizeSm, borderRadius: 5}, styles.borderTopBox, styles.borderRightBox, styles.borderBottomBox, styles.borderLeftBox, styles.mainText]}
                                        onPress={() => console.log("--")}
                                    >PRINT</Text>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <Text style={[{fontSize: fontSizeLg, width: step2}, styles.mainText, styles.borderTopBox, styles.borderLeftBox,]}>🔽Delievery</Text>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text style={[{fontSize: fontSizeSm}, styles.mainText]}></Text>
                                </View>
                                <View style={[{flexGrow: 1}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text style={[{fontSize: fontSizeSm}, styles.mainText]}></Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderTopBox, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>John Dingers(3)</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>Peter Metro</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox]}>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.dFlex, {width: step1}]}>
                            <View style={[styles.vcenter, {height: fontSizeLg*1.5, width: step2, paddingLeft: paddingLg}, styles.borderLeftBox,]}>
                                <Text style={[{fontSize: fontSizeSm}, styles.mainText]}>Zach Lass</Text>
                            </View>
                            <View style={[styles.dFlex, {width: step1 - step2}]}>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                    <Text
                                        style={[{paddingTop: 1, paddingBottom: 1, paddingLeft: paddingSm, paddingRight: paddingSm, fontSize: fontSizeSm, borderRadius: 5}, styles.borderTopBox, styles.borderRightBox, styles.borderBottomBox, styles.borderLeftBox, styles.mainText]}
                                        onPress={() => console.log("--")}
                                    >START</Text>
                                </View>
                                <View style={[{flexGrow: 1, width: '50%'}, styles.center, styles.borderTopBox, styles.borderLeftBox,]}>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{width: width - step1}}>
                        <HChart />
                    </View>
                </View>
                
            </View>
        )
    }
}