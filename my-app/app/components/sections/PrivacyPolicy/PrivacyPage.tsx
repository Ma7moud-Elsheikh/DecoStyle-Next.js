import React from 'react';
import CustomContainer from '../../common/CustomContainer';

const PrivacyPage = () => {
    return (
        <div className="py-[50px]">
            <CustomContainer>
                <div className="top-wrapper lg:w-3/4 mx-auto">
                    <h4 className="uppercase mb-[30px] text-[32px] leading-[41.6px] text-black font-[600] -mt-[7px]" style={{ fontFamily: 'var(--font)' }}>
                        We're always looking for new ways to provide privacy for our customers.
                    </h4>
                    <p className="m-0 mb-[30px] text-[18px] font-[400] text-[var(--text-color)] leading-[30px]">
                        Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque quis. Varius a, nunc faucibus proin elementum id odio auctor. Nunc, suspendisse consequat libero, pharetra tellus
                        vulputate auctor venenatis tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat.
                    </p>
                    <ul>
                        <li className="m-0 mb-[10px] text-base font-normal text-[18px] text-black leading-[30px]">— Blandit dignissim nulla varius tristique a sed integer ut tempor.</li>
                        <li className="m-0 mb-[10px] text-base font-normal text-[18px] text-black leading-[30px]">— Augue interdum semper bibendum amet sed.</li>
                        <li className="m-0 mb-[10px] text-base font-normal text-[18px] text-black leading-[30px]">— Dis in at ultricies tortor sit tellus.</li>
                        <li className="m-0 mb-[10px] text-base font-normal text-[18px] text-black leading-[30px]">— Habitant ornare aenean maecenas pretium</li>
                    </ul>
                    <p className="m-0 mb-[30px] text-[18px] font-[400] text-[var(--text-color)] leading-[30px]">
                        Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus purus. Commodo fames tristique dui pharetra elit aliquet morbi. Eget consectetur risus nunc lorem sit consequat aliquet. Dolor velit consectetur etiam scelerisque. Integer interdum sodales scelerisque diam massa
                        quam sit quis. Sed et dui a nam pulvinar. Tristique justo, donec lectus vitae, cursus ligula ridiculus lacus, tincidunt. Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo. Etiam dignissim orci dignissim vitae.
                    </p>
                    <div className="safe-data my-[55px]">
                        <h4 className="uppercase mb-[30px] text-[32px] leading-[41.6px] text-black font-[600] -mt-[7px]">Your data is safe with us, we will not share any information with external sources.</h4>
                        <p className="m-0 mb-[30px] text-[18px] font-[400] text-[var(--text-color)] leading-[30px]">
                            Blandit dignissim nulla varius tristique a sed integer ut tempor. Augue interdum semper bibendum amet sed. Dis in at ultricies tortor sit tellus. Habitant ornare aenean maecenas pretium, dui ullamcorper quis. Egestas viverra et id aliquet faucibus rhoncus a. Sollicitudin
                            nisl nulla tempor pretium lorem at mauris faucibus pulvinar.
                        </p>
                        <ul className="list-decimal">
                            <li className="m-0 mb-[10px] text-[18px] font-normal text-black leading-[30px] pl-[15px]">Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus purus. Commodo fames tristique dui pharetra elit aliquet morbi.</li>
                            <li className="m-0 mb-[10px] text-[18px] font-normal text-black leading-[30px] pl-[15px]">Eget consectetur risus nunc lorem sit consequat aliquet. Dolor velit consectetur etiam scelerisque.</li>
                            <li className="m-0 mb-[10px] text-[18px] font-normal text-black leading-[30px] pl-[15px]">Integer interdum sodales scelerisque diam massa quam sit quis. Sed et dui a nam pulvinar. Tristique justo, donec lectus vitae, cursus ligula ridiculus lacus, tincidunt.</li>
                            <li className="m-0 mb-[10px] text-[18px] font-normal text-black leading-[30px] pl-[15px]">Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo. Etiam dignissim.</li>
                            <li className="m-0 mb-[10px] text-[18px] font-normal text-black leading-[30px] pl-[15px]">Aliquam eget et viverra risus purus. Commodo fames tristique dui pharetra elit aliquet morbi.</li>
                        </ul>
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
};

export default PrivacyPage;
