import * as Yup from "yup"

export const candidate = Yup.object({
    position: Yup.string().min(2).max(25).required("please enter position applied for"),
    name: Yup.string().min(2).max(24).required("please enter full name"),
    nationality: Yup.string().min(2).max(24).required("please enter nationality"),
    ppNumber: Yup.string().min(2).max(24).required("please enter passport number"),
    ppExpireDate: Yup.string().min(2).max(24).required("please enter ecpiry date"),
    dob: Yup.string().min(2).max(24).required("please enter date of birth"),
    visaStatus: Yup.string().min(2).max(24).required("please enter visa status"),
    experience: Yup.string().min(2).max(24).required("please enter experience"),
    expectedSalary: Yup.string().min(2).max(24).required("please enter expected salary"),
    contact: Yup.string().min(2).max(24).required("please enter contact"),
})