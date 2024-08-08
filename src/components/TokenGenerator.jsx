import { TextField } from '@mui/material';
import Style from './tokengenerator.module.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const TokenGenerator = () => {
    const [tokens, setTokens] = useState(null);

    const initialValues = {
        numberofbluetoken: "",
        bluetokenprefix: "",
        bluetokenperrow: "",
        numberofredtoken: "",
        redtokenprefix: "",
        redtokenperrow: "",
    };

    const validationSchema = Yup.object().shape({
        numberofbluetoken: Yup.string()
            .matches(/^\d+$/, "Number of Blue Token must be a number")
            .required("Number of Blue Token is required"),
        bluetokenprefix: Yup.string()
            .matches(/^[A-Za-z]$/, "Blue Token Prefix must be a single alphabet character")
            .required("Blue Token Prefix is required"),
        bluetokenperrow: Yup.string()
            .matches(/^\d+$/, "Number of Blue Tokens per row must be a number")
            .required("Number of Blue Tokens per row is required"),
        numberofredtoken: Yup.string()
            .matches(/^\d+$/, "Number of Red Token must be a number")
            .required("Number of Red Token is required"),
        redtokenprefix: Yup.string()
            .matches(/^[A-Za-z]$/, "Red Token Prefix must be a single alphabet character")
            .required("Red Token Prefix is required"),
        redtokenperrow: Yup.string()
            .matches(/^\d+$/, "Number of Red Tokens per row must be a number")
            .required("Number of Red Tokens per row is required"),
    });

    const textFieldStyles = {
        input: { color: 'white' },
        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
        '& .MuiInputLabel-root': { color: 'white' },
        '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
    };

    const generateTokens = (values) => {
        const blueTokens = [];
        const redTokens = [];

        // Generate Blue Tokens
        for (let i = 1; i <= parseInt(values.numberofbluetoken); i++) {
            blueTokens.push(`${values.bluetokenprefix}${i}`);
        }

        // Generate Red Tokens
        for (let i = 1; i <= parseInt(values.numberofredtoken); i++) {
            redTokens.push(`${values.redtokenprefix}${i}`);
        }
     
        setTokens({
            blue: formatTokens(blueTokens, parseInt(values.bluetokenperrow)),
            red: formatTokens(redTokens, parseInt(values.redtokenperrow)),
        });
    };

    const formatTokens = (tokens, perRow) => {
        const rows = [];
        for (let i = 0; i < tokens.length; i += perRow) {
            rows.push(tokens.slice(i, i + perRow));
        }
        return rows;
    };

    return (
        <div>
            <h1 className={Style.heading}>Token Generator Application</h1>
            <div className={Style.maincontainer}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        generateTokens(values);
                        resetForm();
                    }}
                >
                    {(formikProps) => (
                        <Form onSubmit={formikProps.handleSubmit} autoComplete='off'>
                            <div className={Style.container}>
                                {/* Blue Token Fields */}
                                <div>
                                    <span className={Style.subhead}>Number of Blue Token*</span>
                                    <TextField
                                        id="numberofbluetoken"
                                        name='numberofbluetoken'
                                        size="small"
                                        type='number'
                                        sx={textFieldStyles}
                                        fullWidth
                                        error={formikProps.touched.numberofbluetoken && Boolean(formikProps.errors.numberofbluetoken)}
                                        helperText={formikProps.touched.numberofbluetoken && formikProps.errors.numberofbluetoken}
                                        {...formikProps.getFieldProps("numberofbluetoken")}
                                    />
                                </div>
                                <br />
                                <div>
                                    <span className={Style.subhead}>Blue Token Prefix*</span>
                                    <TextField
                                        id="bluetokenprefix"
                                        name='bluetokenprefix'
                                        size="small"
                                        sx={textFieldStyles}
                                        fullWidth
                                        error={formikProps.touched.bluetokenprefix && Boolean(formikProps.errors.bluetokenprefix)}
                                        helperText={formikProps.touched.bluetokenprefix && formikProps.errors.bluetokenprefix}
                                        {...formikProps.getFieldProps("bluetokenprefix")}
                                    />
                                </div>
                                <br />
                                <div>
                                    <span className={Style.subhead}>Blue Token Per Row*</span>
                                    <TextField
                                        id="bluetokenperrow"
                                        name='bluetokenperrow'
                                        size="small"
                                        type='number'
                                        sx={textFieldStyles}
                                        fullWidth
                                        error={formikProps.touched.bluetokenperrow && Boolean(formikProps.errors.bluetokenperrow)}
                                        helperText={formikProps.touched.bluetokenperrow && formikProps.errors.bluetokenperrow}
                                        {...formikProps.getFieldProps("bluetokenperrow")}
                                    />
                                </div>
                                <br />
                                {/* Red Token Fields */}
                                <div>
                                    <span className={Style.subhead}>Number of Red Token*</span>
                                    <TextField
                                        id="numberofredtoken"
                                        name='numberofredtoken'
                                        size="small"
                                        type='number'
                                        sx={textFieldStyles}
                                        fullWidth
                                        error={formikProps.touched.numberofredtoken && Boolean(formikProps.errors.numberofredtoken)}
                                        helperText={formikProps.touched.numberofredtoken && formikProps.errors.numberofredtoken}
                                        {...formikProps.getFieldProps("numberofredtoken")}
                                    />
                                </div>
                                <br />
                                <div>
                                    <span className={Style.subhead}>Red Token Prefix*</span>
                                    <TextField
                                        id="redtokenprefix"
                                        name='redtokenprefix'
                                        size="small"
                                        sx={textFieldStyles}
                                        fullWidth
                                        error={formikProps.touched.redtokenprefix && Boolean(formikProps.errors.redtokenprefix)}
                                        helperText={formikProps.touched.redtokenprefix && formikProps.errors.redtokenprefix}
                                        {...formikProps.getFieldProps("redtokenprefix")}
                                    />
                                </div>
                                <br />
                                <div>
                                    <span className={Style.subhead}>Red Token Per Row*</span>
                                    <TextField
                                        id="redtokenperrow"
                                        name='redtokenperrow'
                                        size="small"
                                        type='number'
                                        sx={textFieldStyles}
                                        fullWidth
                                        error={formikProps.touched.redtokenperrow && Boolean(formikProps.errors.redtokenperrow)}
                                        helperText={formikProps.touched.redtokenperrow && formikProps.errors.redtokenperrow}
                                        {...formikProps.getFieldProps("redtokenperrow")}
                                    />
                                </div>
                                <br />
                                <div style={{ display: "flex" }}>
                                    <button className={Style.button} type='submit'><span>GENERATE</span></button>
                                    <button
                                        className={Style.button}
                                        type='button'
                                        onClick={() => {
                                            formikProps.resetForm();
                                            setTokens(null);
                                        }}
                                    ><span>CLEAR</span></button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div>
                    {tokens && (tokens.blue.length > 0 || tokens.red.length > 0) ? (
                        <div className={Style.tokenDisplay}>
                            {tokens.blue && tokens.blue.map((row, index) => (
                                <div key={index} className={Style.tokenRow}>
                                    {row.map((token, idx) => (
                                        <div key={idx} className={Style.token} style={{ background: "blue" }}>{token}</div>
                                    ))}
                                </div>
                            ))}
                            {tokens.red && tokens.red.map((row, index) => (
                                <div key={index} className={Style.tokenRow}>
                                    {row.map((token, idx) => (
                                        <div key={idx} className={Style.token} style={{ background: "red" }}>{token}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <center className={Style.noTokensMessage}>PLEASE ENTER THE VALUES TO GENERATE THE TOKEN</center>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TokenGenerator;
