// components for the operations display
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colours } from '@/utils/colours';
import Button from './buttons';

const backDelete = "\u232B";
// let count = 0;
let braceSwitch = false;

// the calculator container + display component
const Calc = () => {
    const [firstValue, setFirstValue] = useState('');
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState('');
    // use state for the braces
    // const [brace, setBrace] = useState('(');

    const handleNumberInput = (num: string) => {
        if (displayValue == '0') {
            setDisplayValue(num);
        } else {
            setDisplayValue(displayValue + num);
        }
    }
    const handleOperatorInput = (operator: string) => {        
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    }

    const handleCalculation = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);
        let num3 = 0;

        if (operator === '+'){
            setDisplayValue( (num1 + num2).toString() );
        } else if (operator === '-'){
            setDisplayValue( (num1 - num2).toString() );
        } else if (operator === '*'){
            setDisplayValue( (num1 * num2).toString() );
        } else if (operator === '/'){
            setDisplayValue( (num1 / num2).toString() );
        } else if (operator === '%'){
            setDisplayValue( (num1 % num2).toString() );
        } else if (!num1) {
            setDisplayValue((num2).toString());
        }

        setOperator('');
        setFirstValue('');
    }

    const handleClear = () => {
        setDisplayValue('0');
        setOperator('');
        setFirstValue('');
    }

    const handleDelete = () => {
        if (displayValue.length == 1) {
            setDisplayValue("0");
        } else {
            setDisplayValue(displayValue.slice(0, -1));
        }  
    }

    const handleBraces = () => {
        // boolean switch to handle the braces?         
        if (braceSwitch == false) {
            setDisplayValue(displayValue + '(');
            braceSwitch = true;
        } else if (braceSwitch == true) {
            setDisplayValue(displayValue + ')');
            braceSwitch = false;
        }
    }

    return (
        // where the tags come in
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={{color: colours.hotPink, fontSize: 40, fontWeight: 300}}>
                    {firstValue + operator}
                </Text>
                <Text style={{color: colours.hotPink, fontSize: 60, fontWeight: 300, paddingRight: 15, paddingLeft: 15,}}>{displayValue}</Text>
            </View>
            <View style={styles.keypad}>
                <Button title='C' type='clear' onPress={handleClear}></Button>

                <Button title={backDelete} type='del' onPress={handleDelete}></Button>

                <Button title='%' type='ops' onPress={() => handleOperatorInput('%')}></Button>
                <Button title='/' type='ops' onPress={() => handleOperatorInput('/')}></Button>
                <Button title='7' type='number' onPress={() => handleNumberInput('7')}></Button>
                <Button title='8' type='number' onPress={() => handleNumberInput('8')}></Button>
                <Button title='9' type='number' onPress={() => handleNumberInput('9')}></Button>
                <Button title='x' type='ops' onPress={() => handleOperatorInput('*')}></Button>
                <Button title='4' type='number' onPress={() => handleNumberInput('4')}></Button>
                <Button title='5' type='number' onPress={() => handleNumberInput('5')}></Button>
                <Button title='6' type='number' onPress={() => handleNumberInput('6')}></Button>
                <Button title='-' type='ops' onPress={() => handleOperatorInput('-')}></Button>
                <Button title='1' type='number' onPress={() => handleNumberInput('1')}></Button>
                <Button title='2' type='number' onPress={() => handleNumberInput('2')}></Button>
                <Button title='3' type='number' onPress={() => handleNumberInput('3')}></Button>
                <Button title='+' type='ops' onPress={() => handleOperatorInput('+')}></Button>
                <Button title='00' type='number' onPress={() => {handleNumberInput('00')}}></Button>                
                <Button title='0' type='number' onPress={() => handleNumberInput('0')}></Button>
                <Button title='.' type='number' onPress={() => handleNumberInput('.')}></Button>
                <Button title='=' type='ops' onPress={handleCalculation}></Button>
            </View>
        </View>
    )
};

// after creating the component, export it 
export default Calc;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.lightPink,
    },
    display: {
        alignItems: 'flex-end', 
        flex: 1,
        borderColor: colours.hotPink,
        borderRadius: 20,
        borderWidth: 5,
        justifyContent: 'flex-end',
        marginTop: 15,
    },
    keypad: {
        flex: 2,
        borderColor: colours.hotPink,
        borderRadius: 20,
        borderWidth: 5,
        marginTop: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
        padding: 15,
    }
});