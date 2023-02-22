export const MISDEMEANOURS = [
	'rudeness',
	'vegetables',
	'lift',
	'united',
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const JUST_TALK = 'just-talk';
export type JustTalk = typeof JUST_TALK;

export type Misdemeanour = {
	citizenId: number;
	misdemeanour: MisdemeanourKind;
	date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
};

export const misdemeanourMap = new Map(
	[
		['vegetables','Not eating your vegetables 🥗'],
		['rudeness','Mild Public Rudeness 🤪'],
		['united','Supporting Manchester United 😈'],
		['lift','Speaking in a Lift 🗣'],
]
);
