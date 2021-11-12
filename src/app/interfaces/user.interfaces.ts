export interface Profile {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: any;
    photo?: any;
}

export interface Achievement {
    id: number;
    achievement: string;
    user_id: number;
    priority: number;
    date?: any;
    deleted_at?: any;
    created_at: Date;
    updated_at: Date;
}

export interface UserObject {
    id?: number;
    name?: string;
    lastname?: string;
    birthday?: string;
    phone?: string;
    photo?: any;
    email?: string;
    email_verified_at?: any;
    avatar?: string;
    confirmed?: number;
    confirmation_code?: any;
    placeOfBirth?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: any;
    profile_id?: number;
    premium?: number;
    surveyed?: number;
    cognitivo?: number;
    emocional?: number;
    conductual?: number;
    fortaleza_mental?: number;
    description?: string;
    institution?: string;
    status?: any;
    city?: string;
    register_social?: number;
    height?: string;
    weight?: string;
    dominantFoot?: string;
    dominantHand?: string;
    graduationYear?: string;
    highSchoolAverage?: string;
    gpa?: string;
    sat?: string;
    toef?: any;
    mainSport?: string;
    playingPosition?: string;
    events?: string;
    time?: string;
    records?: string;
    route?: string;
    rankings?: string;
    recognitions?: string;
    press?: string;
    differences?: string;
    competencies?: string;
    goals?: string;
    role_id?: any;
    profile?: Profile;
    roles?: any;
    achievements?: Achievement[];
}

