const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
    <line x1="17.5" y1="17.5" x2="17.51" y2="17.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 2.738.926 5.242 2.44 7.177.603.766 1.345 1.45 2.256 1.955l.09.049c.155.084 8.324 4.16 8.324 4.16s6.28-2.693 8.574-5.594c1.138-1.438 1.435-2.346 1.457-2.397l.002-.007c.104-.252-.037-1.144-1.318-2.347-.29-.272-8.219-6.655-8.219-6.655l-.085-.047c-.98-.55-1.73-1.392-1.934-1.53-.216-.146-5.54-3.646-5.834-3.761-.29-.114-.613-.071-.896.178-.284.251-.382 1.047-.091 1.668l.003.007c.148.315 2.003 2.477 4.105 4.97 1.591 1.886 2.423 2.81 2.423 2.81s.444-.496.467-.517c.118-.112.145-.248.035-.495-.195-.439-1.667-3.296-1.947-3.772-.281-.476-.489-1.118-.415-1.403l.008-.029c.116-.437 1.348-1.269 2.684-.575.669.348 1.136.708 1.136.708s-.593 1.553-1.123 2.641c-.267.548-.74 1.054-1.147 1.377-.406.324-3.798 3.077-5.037 4.092l-.039.031c-.31.256-.593.429-.593.429s-.377-.326-.391-.336c-.027-.018-2.456-1.86-2.456-1.86s-1.218-1.644-1.263-2.52c-.044-.864-.073-1.488-.073-2.078 0-6.626 5.373-12 12-12" />
  </svg>
);

const LinkedinIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="4" cy="4" r="2" stroke="none" />
  </svg>
);

export { InstagramIcon, WhatsAppIcon, LinkedinIcon };