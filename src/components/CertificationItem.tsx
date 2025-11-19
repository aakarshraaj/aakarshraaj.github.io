'use client';

interface CertificationItemProps {
  title: string;
  institution: string;
  duration: string;
  location?: string;
  skills?: string[];
  credentialId?: string;
}

export function CertificationItem({ 
  title, 
  institution, 
  duration, 
  location,
  skills,
  credentialId 
}: CertificationItemProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* Title with duration and institution */}
      <h4 className="text-neutral-900 dark:text-neutral-100">
        <span style={{ fontWeight: 500 }}>{title}</span>
        <span style={{ fontWeight: 400 }}> • {duration}, {institution}</span>
      </h4>

      {/* Skills or Credential */}
      {skills && skills.length > 0 && (
        <p className="text-neutral-600 dark:text-neutral-400">
          {skills.join(', ')}.
        </p>
      )}

      {credentialId && (
        <p className="text-neutral-600 dark:text-neutral-400">
          Certified SAFe® 6 Practitioner from {institution} - Credential ID {credentialId}
        </p>
      )}
    </div>
  );
}
