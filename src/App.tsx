import { Button, Card, Input, Rate, Tag } from 'antd';
import './App.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCoffeeStore } from './model/coffeeStore';
import { useEffect, useState } from 'react';
import { useCounterStore } from './model/counter.store';

function App() {
    // const { getCoffeeList, coffeeList } = useCoffeeStore();
    // const [text, setText] = useState<string>('');

    // const coffeeSearchHandler = (text: string) => {
    //     getCoffeeList({ text });
    //     setText(text);
    // };

    // useEffect(() => {
    //     getCoffeeList();
    // }, []);

    const { counter, decrement, increment, persistedCounter } =
        useCounterStore();

    return (
        <div className='wrapper'>
            <Button onClick={increment}>+</Button>
            <span>{counter}</span>
            <span>{persistedCounter}</span>
            <Button onClick={decrement}>-</Button>
            {/* <Input
                placeholder='поиск'
                value={text}
                onChange={(e) => coffeeSearchHandler(e.currentTarget.value)}
            />
            <div className='cardsContainer'>
                {coffeeList &&
                    coffeeList.map((coffee) => (
                        <Card
                            key={coffee.id}
                            cover={<img src={coffee.image} alt={coffee.name} />}
                            actions={[
                                <Button icon={<ShoppingCartOutlined />}>
                                    {coffee.price}
                                </Button>,
                            ]}
                        >
                            <Card.Meta
                                title={coffee.name}
                                description={coffee.subTitle}
                            />
                            <Tag color='purple' style={{ marginTop: 12 }}>
                                {coffee.type}
                            </Tag>
                            <Rate
                                defaultValue={coffee.rating}
                                disabled
                                allowHalf
                            />
                        </Card>
                    ))}
            </div> */}
        </div>
    );
}

export default App;
