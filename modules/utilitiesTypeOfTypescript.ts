// Partial is a util type which have to get one of the field in object: 
// Struct : type Partial<T> = { [P in keyof T]?: T[P] | undefined; } /// nice

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

// Required<Type>
// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
// Struct : type Required<T> = { [P in keyof T]-?: T[P]; } /// nice
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5, b: "can not miss `b`" };

//Readonly<Type> --> frozen object
//Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
// Struct : type Readonly<T> = { readonly [P in keyof T]: T[P]; }

interface Todo {
  title: string;
}

// const todo: Readonly<Todo> = { // <== error
//   title: "Delete inactive users",
// };

// todo.title = "Hello";  // <== error

//Record<Keys, Type>
//Constructs an object type whose property keys are Keys and whose property values are Type.
//This utility can be used to map the properties of a type to another type.

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

const enum colors {
  new = '#586EC7',
  pending = '#FF8B00',
  approved = '#36B37E',
  rejected = '#E54545',
}

interface StatusInfo {
  text: string;
  color: colors;
  markdown: string;
}

interface Status {
  LI: {
    NEW: StatusInfo,
    PENDING_APPROVAL: StatusInfo,
    HOS_APPROVED: StatusInfo,
    HOS_REJECTED: StatusInfo,
    VENDOR_ACKNOWLEDGED: StatusInfo
  },
  BATCH: {
    NEW: StatusInfo,
    DOCS_PENDING_UPLOAD: StatusInfo,
    DOCS_UPLOADED: StatusInfo,
    BATCH_PENDING_APPROVAL: StatusInfo,
    DTE_APPROVED: StatusInfo,
    DTE_REJECTED: StatusInfo,
    REPORT_PENDING_UPLOAD: StatusInfo,
  },
  ISSUANCE: {
    INFOR: StatusInfo,
    ACKNOWLEDGED: StatusInfo,
    REJECTED: StatusInfo,
  },
  PO: {
    REJECTED: StatusInfo,
    INFOR: StatusInfo,
  },
}

type Categories = "LI" | "BATCH" | "ISSUANCE" | "PO"

const statusAccess: Status = {
  // status[main][statusKey] : this is base usage for StatusResolver component
  LI: {
    NEW: { text: 'NEW', color: colors.new, markdown: 'LI/Batch has been recently created.' },
    PENDING_APPROVAL: { text: 'PENDING APPROVAL', color: colors.pending, markdown: 'LI/Batch has been requested for HOS/DTE approvals.' },
    HOS_APPROVED: { text: 'APPROVED', color: colors.approved, markdown: 'HOS logged in VMI portal and approved LI.' },
    HOS_REJECTED: { text: 'REJECTED', color: colors.rejected, markdown: 'HOS logged in VMI portal and rejected LI.' },
    VENDOR_ACKNOWLEDGED: { text: 'ACKNOWLEDGED', color: colors.approved, markdown: 'Vendor logged in VMI portal  and acknowledge LI.' },
  },
  BATCH: {
    NEW: { text: 'NEW', color: colors.new, markdown: 'LI/Batch has been recently created.' },
    DOCS_PENDING_UPLOAD: { text: 'PENDING UPLOAD', color: colors.pending, markdown: 'Vendors are able to upload docs after HOS approved the batches.' },
    DOCS_UPLOADED: { text: 'DOCS UPLOADED', color: colors.approved, markdown: 'The document is uploaded by Vendors, you can view docs if you have permission.' },
    BATCH_PENDING_APPROVAL: { text: 'PENDING APPROVAL', color: colors.pending, markdown: 'LI/Batch has been requested for HOS/DTE approvals.' },
    DTE_APPROVED: { text: 'APPROVED', color: colors.approved, markdown: 'DTE logged in VMI portal and approved batches.' },
    DTE_REJECTED: { text: 'REJECTED', color: colors.rejected, markdown: 'DTE logged in VMI portal and reject batches.' },
    REPORT_PENDING_UPLOAD: { text: 'PENDING REPORT', color: colors.pending, markdown: 'Vendors are able to upload docs after HOS approved the batches.' },
  },
  ISSUANCE: {
    INFOR: { text: 'INFOR', color: colors.new, markdown: 'Issuance has been recently created.' },
    ACKNOWLEDGED: { text: 'ACKNOWLEDGED', color: colors.approved, markdown: 'Verified by vendor for this issuance' },
    REJECTED: { text: 'REJECTED', color: colors.rejected, markdown: 'Rejected by contractors or officers' },
  },
  PO: {
    REJECTED: { text: 'REJECTED', color: colors.rejected, markdown: 'Rejected by contractors or officers' },
    INFOR: { text: 'INFOR', color: colors.new, markdown: 'Have just created and no update so far.' },
  },
}
