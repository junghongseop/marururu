import { useUser } from '@/hooks';
import {
  useSubmitFinalFormMutation,
  useUploadFormDocumentMutation,
} from '@/services/form/mutations';
import { useExportFormQuery } from '@/services/form/queries';
import { useFormDocumentValueStore, useSetFormDocumentStore } from '@/store';
import type { ChangeEventHandler } from 'react';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';

export const useSubmitFinalFormAction = () => {
  const formDocument = useFormDocumentValueStore();
  const { submitFinalFormMutate } = useSubmitFinalFormMutation(formDocument.formUrl);

  const handleSubmitFinalForm = () => {
    submitFinalFormMutate();
  };

  return { handleSubmitFinalForm };
};

export const useExportFormAction = (
  openPdfGeneratedLoader: () => void,
  closePdfGeneratedLoader: () => void
) => {
  const { userData } = useUser();
  const { data: exportFormData } = useExportFormQuery();
  const [pdfBlobUrl, setPdfBlobUrl] = useState('');
  const [hasDownloaded, setHasDownloaded] = useState(false);

  const downloadPdf = useCallback(() => {
    if (!pdfBlobUrl) return;

    const link = document.createElement('a');
    link.href = pdfBlobUrl;
    link.setAttribute(
      'download',
      `${userData.name} 부산소프트웨어마이스터고등학교 원서접수.pdf`
    );
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(pdfBlobUrl);
    setPdfBlobUrl('');
    setHasDownloaded(true);
  }, [pdfBlobUrl, userData.name]);

  useEffect(() => {
    if (exportFormData && !hasDownloaded) {
      const blobUrl = window.URL.createObjectURL(new Blob([exportFormData]));
      setPdfBlobUrl(blobUrl);
      downloadPdf();
      closePdfGeneratedLoader();
    } else if (!exportFormData) {
      openPdfGeneratedLoader();
    }
  }, [
    exportFormData,
    hasDownloaded,
    closePdfGeneratedLoader,
    openPdfGeneratedLoader,
    downloadPdf,
  ]);

  const handleExportForm = useCallback(() => {
    if (pdfBlobUrl) {
      downloadPdf();
    } else if (exportFormData) {
      const blobUrl = window.URL.createObjectURL(new Blob([exportFormData]));
      setPdfBlobUrl(blobUrl);
      downloadPdf();
    } else {
      openPdfGeneratedLoader();
    }
  }, [downloadPdf, openPdfGeneratedLoader, exportFormData, pdfBlobUrl]);

  return { handleExportForm };
};

export const useInput = (openLoader: () => void, closeLoader: () => void) => {
  const setFormDocument = useSetFormDocumentStore();
  const { uploadFormDocumentMutate, isLoading } =
    useUploadFormDocumentMutation(setFormDocument);
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false);

  const handleFormDocumentChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;
    if (!files || files.length === 0) return;

    const file = files[0];

    setFormDocument((prev) => ({ ...prev, fileName: file.name }));

    openLoader();

    uploadFormDocumentMutate(file, {
      onSuccess: () => {
        setIsUploadSuccessful(true);
        closeLoader();
      },
      onError: () => {
        setIsUploadSuccessful(false);
        closeLoader();
        alert('파일 업로드에 실패했습니다. 다시 시도해주세요.');
      },
    });
  };

  return { handleFormDocumentChange, isUploadSuccessful, isLoading };
};
