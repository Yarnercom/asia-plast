import React from 'react';
import './Certificate.css'
import {Certificate as CertificatesType} from "@/services/certificates/entity";
import ImageComponent from "@/components/ui/ImageComponent";

interface CertificateInternalProps {
    certificate: CertificatesType | null;
}

const CertificateInternal: React.FC<CertificateInternalProps> = (certificate) => {
    return (
        <div className='flex gap-[30px]'>
            <div className='float-left'>
                <ImageComponent
                    src={certificate.certificate?.certificateImage ? `data:image/${certificate.certificate?.certificateImageType};base64, ${certificate.certificate?.certificateImage}` : ''}
                    alt={certificate.certificate?.name || "Certificate Image"}
                    width={600}
                    height={600}
                    className="w-[500px] h-[800px] object-cover"
                />
            </div>
            <div>
                <h1>{certificate.certificate?.name}</h1>
                <p>{certificate.certificate?.description}</p>
            </div>
        </div>
    );
};

export default CertificateInternal;