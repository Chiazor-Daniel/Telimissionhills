import React, { useState, useRef } from 'react';
import { Stepper } from 'react-dynamic-stepper';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import PhoneInputComponent from './inputPhone';

const FormInput = ({ type, id, name, value, onChange, label }) => (
    <>
        <input type={type} id={id} name={name} value={value} onChange={onChange} />
        <label htmlFor={id}>{label}</label>
        <br />
    </>
);

const StepperComp = () => {
    const [selectedInvestment, setSelectedInvestment] = useState(null);
    const [acceptFirstTerms, setAcceptFirstTerms] = useState({
        checked: false,
        touched: false,
    });
    const [acceptSecondTerms, setAcceptSecondTerms] = useState({
        checked: false,
        touched: false,
    });
    const [acceptThirdTerms, setAcceptThirdTerms] = useState({
        checked: false,
        touched: false,
    });

    const [isWarning, setIsWarning] = useState(false);
    const [isSecondStepLoading, setIsSecondStepLoading] = useState(false);
    const stepperRef = useRef(null);
    const [selectedTransferMethod, setSelectedTransferMethod] = useState('');
    const [whatHappen, setWhatHappen] = useState('');

    const handleTransferMethodChange = (e) => {
        setSelectedTransferMethod(e.target.value);
    };

    const handleInvestmentChange = (event) => {
        setSelectedInvestment(event.target.value);
    };

    const firstTermsHandler = (event) => {
        setAcceptFirstTerms({
            checked: event.target.checked,
            touched: true,
        });
    };

    const secondTermsHandler = (event) => {
        setAcceptSecondTerms({
            checked: event.target.checked,
            touched: true,
        });
    };

    const thirdTermsHandler = (event) => {
        setAcceptThirdTerms({
            checked: event.target.checked,
            touched: true,
        });
    };

    const isWarningHandler = () => {
        setIsWarning((prev) => !prev);
    };

    const timeout = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const secondStepAsyncFunc = async () => {
        try {
            setIsSecondStepLoading(true);
            await timeout(3000);
            console.log('second step clicked');
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setIsSecondStepLoading(false);
        }
    };

    const investments = [
        { id: 'investment1', value: '1000', label: 'Less than $5,000' },
        { id: 'investment2', value: '5000', label: '$5,000 - $10,000' },
        { id: 'investment3', value: '10000', label: '$10,000 - $20,000' },
        { id: 'investment4', value: '50000', label: '$20,000 - 40,000' },
        { id: 'investment5', value: '100000', label: '$40,000 - $50,000' },
    ];

    const transferMethods = [
        { id: 'transferMethod1', value: 'BTC/CryptoCurrency', label: 'BTC/CryptoCurrency' },
        { id: 'transferMethod2', value: 'Credit Card / Debit Card', label: 'Credit Card / Debit Card' },
        { id: 'transferMethod3', value: 'Wire Transfer', label: 'Wire Transfer' },
        { id: 'transferMethod4', value: 'MoneyGram/Western Union', label: 'MoneyGram/Western Union' },
        { id: 'transferMethod5', value: 'Cash', label: 'Cash' },
        { id: 'transferMethod6', value: 'Other', label: 'Other' },
    ];

    const stepsWithIcons = [
        {
            header: {
                label: 'Step 1',
                indicator: <AiOutlineFileAdd />,
            },
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h3 style={{ marginBottom: '20px' }}>How much did you invest?</h3>
                    {investments.map(({ id, value, label }) => (
                        <FormInput
                            key={id}
                            type="radio"
                            id={id}
                            name="investment"
                            value={value}
                            onChange={handleInvestmentChange}
                            label={label}
                        />
                    ))}
                </div>
            ),
            isError: !selectedInvestment,
            isComplete: selectedInvestment !== null,
        },
        {
            header: {
                label: 'Step 2',
                indicator: <RiExchangeDollarLine />,
            },
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <h3 style={{ marginBottom: '20px' }}>How did you Transfer the Money ?</h3>
                    {transferMethods.map(({ id, value, label }) => (
                        <FormInput
                            key={id}
                            type="radio"
                            id={id}
                            name="transferMethod"
                            value={value}
                            onChange={handleTransferMethodChange}
                            label={label}
                        />
                    ))}
                </div>
            ),
            onClickHandler: () => secondStepAsyncFunc(),
            isLoading: isSecondStepLoading,
            isError: !selectedTransferMethod,
            isComplete: !!selectedTransferMethod,
        },
        {
            header: {
                label: 'Step 3',
                indicator: <IoDocumentTextOutline />,
            },
            content: (
                <div>
                    <h3 style={{ marginBottom: '20px' }}>Anything Else We Should Know About</h3>
                    <div className="form_box mb-20">
                        <textarea
                            name="message"
                            onChange={(e) => setWhatHappen(e.target.value)}
                            id="message"
                            style={{borderRadius: '20px'}}
                            cols={30}
                            rows={10}
                            placeholder="This is What Happened..."
                            defaultValue={""}
                        />
                    </div>
                </div>
            ),
            isError: !(whatHappen.length > 5),
            isComplete: whatHappen.length > 5,
        },
        {
            header: {
                label: 'Step 4',
                indicator: <IoDocumentTextOutline />,
            },
            content: (
                <div>
                    <h3 style={{ marginBottom: '20px' }}>How Can We Reach You?</h3>
                    <div className='row'>
                        <div className="col-lg-6">
                            <div className="form_box mb-20">
                                <input type="text" name="firstName" placeholder="First Name*" style={{borderRadius: '20px'}} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form_box mb-20">
                                <input type="text" name="lastName" placeholder="Last Name*" style={{borderRadius: '20px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form_box mb-20">
                                <input
                                    type="email"
                                    name="email"
                                    style={{borderRadius: '20px'}}
                                    placeholder="Your E-Mail*"
                                />
                            </div>
                        </div>
                        <div className='col-6'>
                            <PhoneInputComponent />
                        </div>
                    </div>
                </div>
            ),
            isError: !acceptThirdTerms.checked && acceptThirdTerms.touched,
            isComplete: acceptThirdTerms.checked,
        },
    ];

    const submitStepper = () => {
        console.log('submitted');
    };

    return (
        <div className="container">
            <Stepper
                steps={stepsWithIcons}
                footerData={{
                    submitHandler: submitStepper,
                }}
            />
        </div>
    );
};

export default StepperComp;
