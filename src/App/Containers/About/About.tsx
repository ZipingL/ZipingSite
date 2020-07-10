// @ts-ignore
import logo from "../../Assets/linkedin.png";
import React from "react";

export class About extends React.Component {
    render() {
        return(
            <div className="About">
                <div className="about-main-details" >
                    <div className="about-headshot">
                    <img src={logo} className="About-logo" alt="logo"/>
                    </div>
                    <div className="about-title">
                    <h1 className="quickFade delayTwo">Ziping Liu</h1>
			        <h2 className="quickFade delayThree">Software Development Engineer</h2>
                    </div>
                </div>
                <div className="about-articles">
                    <section>
                        <article>
                            <div className="sectionTitle">
                                <h1>Seattle, Washington</h1>
                                <h2>Amazon Web Services</h2>
                                <p>March 2020 to Present</p>
                            </div>
                            
                            <div className="sectionContent">
                                <h1>Software Development Engineer I</h1>
                                <p>Working within the IoT Analytics and Applications team on <a href='https://aws.amazon.com/iot-sitewise'>AWS IoT Sitewise</a>.</p>
                            </div>
                        </article>
                        <div className="clear"></div>
                    </section>
                    <section>
                        <article>
                            <div className="sectionTitle">
                                <h1>Sugarland, Texas</h1>
                                <h2>Texas Instruments</h2>
                                <p>June 2019 to August 2019</p>
                            </div>
                            
                            <div className="sectionContent">
                                <h1>Software Engineering Intern</h1>
                                <p>Developed 1-D and 2-D Fast Fourier Transform Libraries and Testing frameworks for TI’s new and upcoming Automotive DSP, the successor to TI C6000 DSP. Worked with computer architecture teams to debug issues with the new DSP involving pipelining and lower than expected runtimes. Created both human readable code and optimized code versions of the Fast Fourier Transforms.</p>
                            </div>
                        </article>
                        <div className="clear"></div>
                    </section>
                    <section>
                        <article>
                            <div className="sectionTitle">
                                <h1>Sugarland, Texas</h1>
                                <h2>Texas Instruments</h2>
                                <p>June 2018 to August 2018</p>
                            </div>
                            
                            <div className="sectionContent">
                                <h1>Software Engineering Intern</h1>
                                <p>Researched possible speech recognition toolkits for use, specifically ones that utilize neural networks, including Kaldi, CMUSphinx, Mozilla DeepSpeech, and Baidu DeepSpeech. Characterized Mozilla DeepSpeech software and vetted its ability for use on embed- ded platforms. Developed <a href='https://www.hackster.io/spicerack-team/voice-controlled-spice-rack-235834'>a voice controlled turntable</a>.</p>
                            </div>
                        </article>
                        <div className="clear"></div>
                    </section>
                    <section>
                        <article>
                            <div className="sectionTitle">
                                <h1>Boulder, Colorado</h1>
                                <h2>Holland and Hart LLP</h2>
                                <p>May 2017 to August 2017</p>
                            </div>
                            
                            <div className="sectionContent">
                                <h1>Patent Engineer Intern</h1>
                                <p>Met with inventors with new technology to be patented. Drafted patent applications regarding descriptions of figures. Drafted arguments for overcoming patent application rejections from patent offices in the US, China, and European Union.</p>
                            </div>
                        </article>
                        <div className="clear"></div>
                    </section>
                    <section>
                        <article>
                            <div className="sectionTitle">
                                <h1>Austin, Texas</h1>
                                <h2>Ticom Geomatics</h2>
                                <p>May 2016 to August 2016</p>
                            </div>
                            
                            <div className="sectionContent">
                                <h1>Signal Processing/ Electrial Engineering Intern</h1>
                                <p>Characterized a software defined radio (NI X310). Used signal generators, Matlab, gps units, to characterize the radio. Debugged radio in C++ and documented various bugs found with the utilization of the SDR with Ticom Geomatic’s application software. Trans lated Matlab code to C++ which estimated a sinc bandwidth and wrote corresponding unit tests.</p>
                            </div>
                        </article>
                        <div className="clear"></div>
                    </section>
                    <section>
                        <article>
                            <div className="sectionTitle">
                                <h1>Houston, Texas</h1>
                                <h2>Hewlett Packard Inc</h2>
                                <p>May 2015 to August 2015</p>
                            </div>
                            
                            <div className="sectionContent">
                                <h1>Firmware Engineering Intern</h1>
                                <p>Developed UEFI EDK II Shell Application/Driver which interfaced with laptop panel EEPROM for writing/reading HP Dream- Color calibration data, through the Embedded Controller and I2C interface. Utilized Debugging Boards, JTAG, Serial Monitors and Dediprog Flash Programmer, to debug and program BIOS/UEFI and Embedded Controller code.</p>
                            </div>
                        </article>
                        <div className="clear"></div>
                    </section>
                    <section>
                        <article>
                            <div className="sectionTitle">
                                <h1>Clute, Texas</h1>
                                <h2>Krogers</h2>
                                <p>June 2014 to August 2014</p>
                            </div>
                            
                            <div className="sectionContent">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                            </div>
                        </article>
                        <div className="clear"></div>
                    </section>
                </div>
            </div>

            
        )
    }
}