'use client'

import React, { useEffect } from 'react'
import { ComplianceDocumentType, Section } from '@/lib/types';
import { useParams } from 'next/navigation';
import { useFetch } from '@/lib/hooks';
import { ErrorModal, LoadingCircleModal } from '@/components/modals';
import Image from 'next/image';

function page() {
  const { policyId } = useParams()
  const { data, error, go, status } = useFetch<ComplianceDocumentType>(`/documents/analysis/${policyId}`)
  useEffect(() => {
    go()
  }, [go])

  const getTotalConflicts = (data: ComplianceDocumentType | null) => {
    return (data?.major_compliance_issues.length || 0)
      + (data?.required_changes_to_achieve_compliance.length || 0)
      + (data?.missing_critical_components.length || 0)
      + (data?.recommendations_for_improvement.length || 0)
  }

  return (
    <div className='px-10 py-5 bg-gray-100'>
      <h1 className='text-3xl font-bold'>Analysis complete ({data?.compliance_score}% compliant)</h1>
      <h2 className='uppercase text-[#d55f5a] mt-2'>{getTotalConflicts(data)} conflicts identified</h2>
      <div className='flex flex-col gap-8 my-8'>
        <SectionCard title='Major Compliance Issues' sectionList={data?.major_compliance_issues || []} />
        <SectionCard title='Required Changes to Achieve Compliance' sectionList={data?.required_changes_to_achieve_compliance || []} />
        <SectionCard title='Missing Critical Components' sectionList={data?.missing_critical_components || []} />
        <SectionCard title='Recommendations for Improvement' sectionList={data?.recommendations_for_improvement || []} />
      </div>

      {/* <p>Policy ID: {policyId}</p>
      <div>DATA: {JSON.stringify(data)}</div> */}

      {status === "loading" && <LoadingCircleModal />}
      {<ErrorModal isOpen={status === "error"} title='Upload Error' message={JSON.stringify(error)} />}
    </div>
  )
}

export default page


function SectionCard({ title, sectionList }: { title: string, sectionList: Section[] }) {
  if (sectionList.length === 0) return null
  return (
    <section className='bg-white p-4 rounded-lg shadow'>
      <h2 className='text-2xl text-[#2388ff]'>{title}</h2>
      <div className='flex flex-col gap-3 mt-3'>
        {sectionList.map((section, i) => (
          <article key={i} aria-label={section.section_title}>
            <h3 className='text-xl text-[#666f8d] font-semibold'>{section.section_title}</h3>
            <p className='text-[#18203c]'>{section.section_content}</p>
          </article>
        ))}
      </div>
      <div className='flex justify-end mt-6 gap-4'>
        <button><Image src="/reload.svg" alt='reload' className='w-4 h-4 object-contain' width={24} height={24} /></button>
        {/* <button><Image src="/reload.svg" alt='reload' width={24} height={24} /></button> */}
        <button><Image src="/share.svg" alt='share' className='w-4 h-4 object-contain' width={24} height={24} /></button>
        <button><Image src="/bookmark.svg" alt='bookmark' className='w-4 h-4 object-contain' width={24} height={24} /></button>
        <button><Image src="/menu.svg" alt='menu' className='w-4 h-4 object-contain' width={24} height={24} /></button>
      </div>
    </section>
  )
}