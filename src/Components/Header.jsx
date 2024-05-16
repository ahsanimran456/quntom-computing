import { Select } from 'antd';
import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
const Header = () => {
    const [Country, setCountry] = useState("US");
    const us = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABoCAMAAACDmk9CAAAAvVBMVEX///+/CzAAJ2i+ACzADzT46u3FQkz89vi+AC6/Lzny2t3AIzbBKj+/GDQAJWf++fq3AAC8DyHDT1L19/n34uYvM2sAImYAHmQAG2MAE2CSGEnFCC0AAFcAAFuwtMQAF2EAAFEACl7Y2+Pr7fGkqr64vcwAAEvBxdIXMG01RXg+UoFDTX1jbZNtdJYwQHZ1e5ubn7UkOXJ+i6lRYYtRWIOPkarN0NqROFePED4AAESqorXCDx2MmbNgZIySLE5omHHWAAAI6UlEQVR4nO1baXPjuBHFMJPsJNlgkzAGiF2SEEDQvE9R3CNS/v/P2sYly19TrgLLqy5PFeWmXHgi+uG9bg2qow+NH3/6GiaQXwHGb6t5d/mYeJd59w5//eNPX4KEA4KT2yqIWxNhaqRuYTjZrplLRETMXeITdFEpwT5xOXN8ACCkaZR8ac1ScN12xdSNZvV47C5x3doHgdtGzk1jr5d2QnVr9yUkqnK0ibBAkr5AKL4k9oEohJDsDBB6lpCYqVkvvcSQOFMLfYe7coswWeHtxUDDA4nYhtCcuk1zqlA8JvZFghEqM7eDUoXiG7PXNEVoFy6RTQhN6QG2ViSUWne34/Eih3J1QNilnPbFrVfItZy5Q9jvg3tsAKS6qJw7IH8KEt8cazWMLTU2TISXiFG94TEgwzqxWFrCy8J44/iKtIzXteOrGu4a7afw818ChQNCDNFGbFqIWZrGRC8M64TGk5w3alDqG+kEpEYMMWPS3qi9y/wd/tufA8X9HNF8VWfFRNxGWngvsTst6yWVF744ViNNvNQus2SlEsvbgcJyFCoegeQSFbulJdrKAsncVfYMCTmYuiEjJIqyNovnq4xjufJjAYlIViFE3KrYFqPq5Oo/g/W1wpX5CAhTX+ZX4KssOhAQs/lrmRf6gehVJlOhZOYSpCrlxGyC3iAR2XKBhVe7EqaOjgEEjyMsbezTuqfASLBxaL+kPfxyaSnwVZ/ywSXIuTudW0ChE/WQZRPg6JZjAEnSSZ3gE6f6cxZZ1cDWISSimGa38lUAUekflubnNLEJkjXyVQC16TexdF5TfgAgyZTLOJ/dIZjnqCptySd9WaFcWSVC5zyWuSv5DRIqt3yVXHNZ5OYMDUy/Rl/5A5x2oJyuVolgCsVcdFZrAV8hpJi9KwFVEp8TR3dAEpVVar/8M1A4rdXDEj35nCSK3dojusASHV1FaR7HvXtsOEPx7mk3uyC0eokSVGvxucuUPRpA2M6nadJA4DW/9Cc1mqMefvLs5kVYMqyvymgtyDD10l3pEYDAR+8lI2wUqPHaXsILbsUHNmc6oRYRRM2xe2r6JXXX4YGYdZNUgQV0iGidC4+BiLXn2ILAlCoLWyfYMDESvcUBgMCH3I7FpRudBezWomtdph3l3DUW1tL28dbWzjSOVdm05FhAcD0DHe92WaQBikKzeTyYPHrD0XhDC4ROxhsmj0DC+hHHRCVCwu123sWoPHkLCPS8OI6iEWitewL4qn/QWuTnfweKe7FTrVPkVE2wXm74qpqk1l1cP6t9zWdgYQ5Piw7gDUewLTpBq3kuIZG43cVz9EOY8MZqA40FvoNlLY6S1QgvzuoFk25lAAQSje4yNDqRcHCQeDGJkYmxhuPR1UlwrXVaq1dmeSgSQm5aaxmXmA7yV2ZMI8Es3YeTJWDQWlv8q3AOkp/y+TU5ABDbz1GmOjAuCxRLr7VkDC7KaS31Vtlk04lqMc8hmXXCHJWhn4iRKK5XSJIdxZtvljQgUajdNlivcnDtoKQGHouoS0DJX4wICw1EzHu5c2+OwDhNjlH5JHNZe4qC64vvazVw1+gTJdgrdoCtFeE+Er32RtoONuesORvdAT/9S9YbraXbQb1YemLvov2Y3WzTCP4NPOrxEYCAU4p0e5rqExs0FKGmDqhJ6Ia2dZCQ0E+KaIqixCSipcO6IYntI0x++0+geHcgitdqS72Az8Y99T1Rdsqn1O02ktGdZ/fE9ZLyh7/xy3//FSYeJcqSK7SXvW0HgTeMcyvtMVbaG05mwbStSlTmtjySOS9k7lyYiUBa69s70Zhob7i6VaUgvIrGecMFhNfsyCBdIbE5vsLgDctDqV/TJ+VVjBzXRnSL4/3kzIfQfS2/tcYiLnTrXWcEwJ3EgYDgWjuNUaUDWFbTKU3WIVPaxuvyXxTbrjqhCWFYTzOUu3kRqXpUgLA+CBDCb6swnWleY8rmMSFgFAmtCe+umdaTJKkjKi4Nh0QCposki0o1bWmCo2I9syNYXXpulWxuZryJ636L160zHpC02xw3fW22Eb5tct42m2jOE2r6xfgVcgYC6M5u9BbSj5gJW7G6CRsop9j1hkgLLqpwfQWjyGTrhotgXWJl6ymZ9NuNOgs9HxEPo7fo3eiNAivdE2CvtsfR230mt/qSD+1H2KymyvNXvffVXWutZX8fvbF9yq/eJ56r89vorVxndYSWaYRbIRrNQoxoNSKI1h1Yt983SGgRph3k0gna+kRH2agRUg15y1h7DK1lJ2yRWBs7ejOjuKsdJJghQ382DW47ZFiJbXRpHOeeRm+jt+BAXEWc5OC/54CzTXLfHqGv++WeEHXx4uUVBW94/wLEUYDgOn/zhkBkYAFz99UGTWSFrRvSWW/o+vDaGz5orUMAiQgB5eT5it1iVDl5ZbyhN428KZAk7vEwLVEeNGN4IG70pgo9KrCjN/k2eqNVKdf76A3uwsadwMLLqnocvfH8h+/CxLvR29JnbvSm99aY9Y0evcHql56RgdxHb9nW+dFbn7BBH5yeov/310DhxgrpoEdvYPMwxXr0BvrKWMAku1WvzEzYkkjo0Rs3CUKyZn8VBH4Lb2KneUr9fORbkHDfDhqUjNXVio96VqhSruR7VaH5akueXFWxK+u7SDuXaJ6tvaKrklJNB/h2EFmgRnc3paK3wnevbV9b3lxik/fudRRpezU539Xo0ZvtcYX+mtMQF7nvRaey8A4woiNQrXfuaVnEg+MuIpCU/nt22TUunLMMDCSZz6Ny9Uo6VU+r78lfh1o1joTr/GW43htea6Q237pWzW0O7kewDsapwD4EYYm/5owK4q4jQTn3CcrIuwSzl+GK/eVDYwlHv/EHR6Dz8LtgiuIZz3jGM/6/+NsnCfT3TxLoaxhJ8dHxFX0NI/I+Op5AjhafCMi3MPOMj45v6PtPEqHP42c84xnP+KNGaB/xUYG+D20kPia+f/qRg8UTyNHiEwH5EtpJfEx8Qf/4JBH6PH7GM57xjD9qhPr/5x8dKNQXjj86Pk/L9NOIxieQY8UTyNECgHyS+B0dy/CkJBhotgAAAABJRU5ErkJggg=="
    const pak = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAk1BMVEUBQRz///8APxgAKwAANAAAJgAAIwAAMAAAOw8ALgAAOQsANgAAIAAAOAb6/PsAKADh5eLu8e8mSCsAHgDR2dR2iHpNZ1Fqfm+uubEAGwC4wrtkeGcAFACCkIU/YEdQZ1QyUjimsKhJXk0SOxzEysZZdWKMmo4ZSScAAAAACwCUopejqKRBWESSmpMAEAAAGAAFNxRbe+U3AAACyklEQVRoge2YfZOaMBDGSQIEwjsXxEJR6CG2Xl/8/p+uBES4uwQJwkxnyvOXMzE/l+yzmxVF2bRp06ZNm/51wfXQRDusRXe0iB7XgRt2FLg5WYXt7XzghquwoV4AAL45a7CNV1qzI8xffJIdBjW71PmLJ/M5tluzAeYbxSr29u3jDCfBK4sbVCp/mUQgQ00M+k7+hDSfsQNbsGwcAUhVxdJTWgh+Xyw9AU3glmAdnuvVA85qp3qybCdu2ECcNcSei51cJOtUaDbJBCUSfYN8b38d+KKDE8os2p0Rvzahasb0Bj/IphMqt50q12aqUvmgC/yHbOB43+4MvvBWSRSAXsmLJFzrNnLzCc/58VLeYy80KbaT3fa9CYwIDRWRt/oLTdozYdZ50rtkZSMus1gE6a6qH0GQdr5Q98TxiBOMU+1Uu34E42cqYRgj7eCnkV2sRENmJghlzKgWHXw0JA8UM7ouKjv46GHarlQiu113l/0StS0mJ51ztX69F8h+tJnOuuh+3+FUrj6mSO9r+8+a8OXHuP7MgfwNJgHnt8VnZA866vHJ2eeT+iKq/cIfiearL38w4xZ7oL5xsdCl798HQgM4iBY2jEaHdLis1+/XXCNfW5auDeEgmdJhpgfQjRZdc3wYO4TTG0UzZQ7paHwrxMl5eujofeiAkrFp01L8i4SnIHbf04NUGDxEqRtIFbIVgw/ahyYPD80wka7j2/A/kFvkJnnPhwSH7AAvsle15n+k10NQGmJMYCuCcZg2PY7KzqIKfA0+00FAi/SQh2GY53FRtonxH3iJp/ZvKFeuO8i3f51TwSP0geaxa/qVPmSX3tzO075YGFMlncuB2CsRsWjOf+kwVYaeiU7ej1+ebsaWF/GOvoz1Rd7xEDuv6LDZuGV2XgbNBC3NPETVpUiKSxUfkOcsPOdBYqkYYdUyVnzLuGnTpk2b/kP9BXg1ISKEnP43AAAAAElFTkSuQmCC"
    const ind = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAflBMVEXxWyUAaTT////xVhoAZCz2kXFfmnrz8/fY2OTS0uDk5OwnJ2729vnq6vHw8PX6+vy9vc8jI21sbJcAAGEMDGSoqMKBgadgYJBbW4txcZuHh6kxMXIYGGjGxtcsLG8SEmU7O3odHWmZmba3t854eJ9RUYVISH+RkbFBQXyvr8UfgS9oAAABwUlEQVRoge2W2W6cMBRAyU1bvOCFfTBhMyae+f8f7G0aKW3VaibCVl98hIwf0BHy9V2yLJFIJBKJRCKR+B88RyT7GpEMPoGSUn3m+4fl+a3iNcKrWx5YLrtmqbeyqsqtXhYjQsr3ueErLUhRUEVX3ox7OLltNi8kEBACFyn81thQcluvThH8fyAEFyDKXetH7A/I94ZTAEahVYSoFihDP290CLmYFweTAguaIho3agK3zPejel/uGg9QWCU64bX2+FIWL6Nv3Hk541dBGORDbkhvbU8MboERtnJ2Wm6Xi4SpZbKfjsGY4aC9EO0E8rLY0/KjpAUmkff6MJ3B59DWSzwoWh5n5XJ8FWxvqdQX48ww4HLZJb3dmHgd5Uk54SXe8HzqKtf5a1leO4PbCSNKNk5OyulLh9Gjk24HN/B55m4YWj1RjLF7oaHlQ0B51GOJGtCoV/E9iWycJGJ8ZVgHc/eR/i5Y+kctXCDGv5fcMUTJjdosfm1zjIVuc28N2vzeoO/flIflsI8/RgtFf44WZdDRApPILG9DUb+FH4og6jj3jrxXTf6Qf4tI9iUi2VNEkjzJkzzJkzzJkzzJkzzJ/8V3qoFT2IY72o0AAAAASUVORK5CYII="
    return (
        <div className='header-container'>
            <div className="nav-item">
                <div>
                    <h3>
                        Dashboard
                    </h3>
                </div>
                <div className='nav-item-right'>
                    <div className='search-container'>
                        <div className='search-icon'>
                            <IoMdSearch color='#5D5FEF' size={20} />
                        </div>
                        <div className='search-bar w-100'>
                            <input type="text" placeholder='Search here...' />
                        </div>

                    </div>
                    <div className='d-flex align-items-center'>
                        <div >
                            <img width={20} height={20} style={{ borderRadius: 100 }} src={Country == "US" ? us : Country == "pak" ? pak : ind} alt="" />
                        </div>
                        <Select
                            labelInValue
                            defaultValue={{
                                value: 'US',
                                label: 'Eng (US)',
                            }}
                            style={{
                                width: 120,
                            }}
                            onChange={(value) => {
                                setCountry(value.value)
                            }}
                            options={[
                                {
                                    value: 'US',
                                    label: 'Eng (US)',
                                },
                                {
                                    value: 'pak',
                                    label: 'Pakistan',
                                },
                                {
                                    value: 'in',
                                    label: 'India',
                                },
                            ]}
                        />
                    </div>
                    <div style={{padding:10,background:"#FFFAF1",borderRadius:5} } className='d-flex align-items-center justify-content-center'>
                        <IoNotifications color='#FFA412' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header