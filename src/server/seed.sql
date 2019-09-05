INSERT INTO banks(name, name1, photo_url) VALUES('SIBOR', 'Singapore Inter-Bank Offer Rate', 'https://www.icompareloan.com/img/banks/SIBOR.png');
INSERT INTO banks(name, name1, photo_url) VALUES('BOC', 'Bank Of China', 'https://www.icompareloan.com/img/banks/BOC.png');
INSERT INTO banks(name, name1, photo_url) VALUES('CIMB', 'Commerce International Merchant Bank', 'https://www.icompareloan.com/img/banks/CIMB.png');
INSERT INTO banks(name, name1, photo_url) VALUES('CITI', 'Citi Bank', 'https://www.icompareloan.com/img/banks/CITI.png');
INSERT INTO banks(name, name1, photo_url) VALUES('DBS', 'Development Bank of Singapore', 'https://www.icompareloan.com/img/banks/DBS.png');
INSERT INTO banks(name, name1, photo_url) VALUES('HLF', 'Hong Leong Finance', 'https://www.icompareloan.com/img/banks/HLF.png');
INSERT INTO banks(name, name1, photo_url) VALUES('HSBC', 'Hongkong Shanghai Banking Corporation', 'https://www.icompareloan.com/img/banks/HSBC.png');
INSERT INTO banks(name, name1, photo_url) VALUES('MAY', 'May Bank', 'https://www.icompareloan.com/img/banks/MAY.png');
INSERT INTO banks(name, name1, photo_url) VALUES('OCBC', 'Oversea-Chinese Banking Corporation', 'https://www.icompareloan.com/img/banks/OCBC.png');
INSERT INTO banks(name, name1, photo_url) VALUES('RHB', 'Rashid Hussain Berhad', 'https://www.icompareloan.com/img/banks/RHB.png');
INSERT INTO banks(name, name1, photo_url) VALUES('SCB', 'Standard Chartered Bank', 'https://www.icompareloan.com/img/banks/SCB.png');
INSERT INTO banks(name, name1, photo_url) VALUES('SF', 'Singapura Finance', 'https://www.icompareloan.com/img/banks/SF.png');
INSERT INTO banks(name, name1, photo_url) VALUES('SI', 'Sing Investment & Finance', 'https://www.icompareloan.com/img/banks/SI.png');
INSERT INTO banks(name, name1, photo_url) VALUES('UOB', 'United Overseas Bank', 'https://www.icompareloan.com/img/banks/UOB.png');

INSERT INTO ref_rates(name, rate, bank_id) VALUES('1M SIBOR', 1.88, 1);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3M SIBOR', 1.88, 1);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('6M SIBOR', 1.94, 1);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.25, 2);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.6, 4);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.75, 4);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.08, 5);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('FHR8', '0.95', 5);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.38, 6);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed', 2.6, 6);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('HHR', '4.85', 6);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed (min loan $800k)', 1.98, 7);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2, 7);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed (min loan $800k)', 2.03, 7);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed', 2.05, 7);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('TMDR', 1.40, 7);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.28, 8);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed', 2.33, 8);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed 3rd yr', 2.4, 8);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('4Yrs Fixed', 2.78, 8);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('SRFR2', 4.85, 8);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('1Yr Fixed', 2.22, 9);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 1.98, 9);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('MBR', 1.55, 9);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('R BR', 0, 10);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('FDR', 1.37, 11);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('CLR19', 3.75, 12);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('PHDR19', 2.25, 12);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('PPLR19', 3.25, 12);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('SI BR', 3.25, 13);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.08, 14);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed', 1.98, 14);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed 3rd yr', 2.08, 14);
INSERT INTO ref_rates(name, rate, bank_id) VALUES('ML', 0.85, 14);


INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('BOC 3M Sibor, 2Yrs lock-in (Min loan $500k)', 'both', 'float', 'private', 'completed', true, 500000, 2, 0.7, 2, 0.7, 2, 0.7, 'For loan quantum 500k and above. Legal Subsidy of 0.4% of loan amount, capped at $2,000. Full Redemption penalty: 1.5%. Cancellation Fees: 1.5%. Admin Fee: 0.25%. Floor rate set at 1.00%. In the event SIBOR + Spread is lower than 1%, Floor rate will apply.', 2);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('BOC 2Yrs Fixed, 2Yrs lock-in (Min loan $500k)', 'both', 'fixed', 'private', 'completed', true, 500000, 4, 0, 4, 0, 2, 0.7, 'For loan quantum 500k and above. Legal Subsidy of 0.4% of loan amount, capped at $1,800. Full Redemption penalty: 1.5%. Partial repayment penalty: 1.5%. Cancellation Fees: 1.5%. Admin Fee: 0.25%. Floor rate set at 1.00%. In the event SIBOR + Spread is lower than 1%, Floor rate will apply.', 2);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('BOC 3M Sibor, 2Yrs lock-in (Min loan $300k)', 'both', 'float', 'private', 'completed', false, 300000, 2, 0.75, 2, 0.75, 2, 0.75, 'For loan quantum 300k and above. *NO* Legal Subsidy. Floor rate set at 1.00%. In the event SIBOR + Spread is lower than 1%, Floor rate will apply. Cancellation Penalty: 1.5%. No other fees.', 2);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CIMB 1M Sibor, 2Yrs lock-in (Min loan $200k)', 'both', 'float', 'private', 'completed', true, 200000, 1, 0.25, 1, 0.3, 1, 0.35, 'Full redemption penalty - 1.5%. No partial prepayment penalty. No legal subsidy. Min loan size: $200K', 3);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CIMB 1M Sibor, 2Yrs lock-in (Min loan $200k)', 'new', 'float', 'private', 'buc', true, 200000, 1, 0.25, 1, 0.3, 1, 0.35, 'Full redemption penalty - 1.5%. No partial prepayment penalty. No legal subsidy. Min loan size: $200K', 3);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CITI 1M Sibor, 2Yrs lock-in (Min loan $500k)', 'both', 'float', 'private', 'completed', true, 500000, 1, 0.3, 1, 0.3, 1, 0.4, 'legal subsidy for refi is 0.2% of loan amount capped at $2,500. Comes with 50% interest offset. Waiver of prepayment fee due to sale of property.', 4);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CITI 1M Sibor, 2Yrs lock-in (Min loan $500k)', 'both', 'float', 'private', 'completed', true, 500000, 1, 0.3, 1, 0.3, 1, 0.4, 'legal subsidy for refi is 0.2% of loan amount capped at $2,500. Comes with 50% interest offset. Waiver of prepayment fee due to sale of property.', 4);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CITI 2Yrs Fixed, 2Yrs lock-in (Min loan $500k)', 'both', 'fixed', 'private', 'completed', true, 500000, 5, 0, 5, 0, 1, 0.9, 'legal subsidy for refi is 0.2% of loan amount capped at $2,500', 4);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CITI 1M Sibor, 2Yrs lock-in (Min loan $500k)', 'new', 'float', 'private', 'buc', false, 500000, 1, 0.25, 1, 0.25, 1, 0.45, 'Min loan $500K. Comes with 50% interest offset.', 4);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CITI 3Yrs Fixed, 2Yrs lock-in (Min loan $500k)', 'both', 'fixed', 'private', 'completed', true, 500000, 6, 0, 6, 0, 6, 0, 'legal subsidy for refi is 0.2% of loan amount capped at $2,500', 4);


----------------------------------------Editing & tracking----------------------------

INSERT INTO banks(name, name1, photo_url) VALUES('SIBOR', 'Singapore Inter-Bank Offer Rate', 'https://www.icompareloan.com/img/banks/SIBOR.png'); --1
INSERT INTO banks(name, name1, photo_url) VALUES('BOC', 'Bank Of China', 'https://www.icompareloan.com/img/banks/BOC.png'); --2
INSERT INTO banks(name, name1, photo_url) VALUES('CIMB', 'Commerce International Merchant Bank', 'https://www.icompareloan.com/img/banks/CIMB.png');   --3
INSERT INTO banks(name, name1, photo_url) VALUES('CITI', 'Citi Bank', 'https://www.icompareloan.com/img/banks/CITI.png');  --4
INSERT INTO banks(name, name1, photo_url) VALUES('DBS', 'Development Bank of Singapore', 'https://www.icompareloan.com/img/banks/DBS.png'); --5
INSERT INTO banks(name, name1, photo_url) VALUES('HLF', 'Hong Leong Finance', 'https://www.icompareloan.com/img/banks/HLF.png'); --6
INSERT INTO banks(name, name1, photo_url) VALUES('HSBC', 'Hongkong Shanghai Banking Corporation', 'https://www.icompareloan.com/img/banks/HSBC.png'); --7
INSERT INTO banks(name, name1, photo_url) VALUES('MAY', 'May Bank', 'https://www.icompareloan.com/img/banks/MAY.png'); --8
INSERT INTO banks(name, name1, photo_url) VALUES('OCBC', 'Oversea-Chinese Banking Corporation', 'https://www.icompareloan.com/img/banks/OCBC.png'); --9
INSERT INTO banks(name, name1, photo_url) VALUES('RHB', 'Rashid Hussain Berhad', 'https://www.icompareloan.com/img/banks/RHB.png'); --10
INSERT INTO banks(name, name1, photo_url) VALUES('SCB', 'Standard Chartered Bank', 'https://www.icompareloan.com/img/banks/SCB.png'); --11
INSERT INTO banks(name, name1, photo_url) VALUES('SF', 'Singapura Finance', 'https://www.icompareloan.com/img/banks/SF.png');    --12
INSERT INTO banks(name, name1, photo_url) VALUES('SI', 'Sing Investment & Finance', 'https://www.icompareloan.com/img/banks/SI.png');    --13
INSERT INTO banks(name, name1, photo_url) VALUES('UOB', 'United Overseas Bank', 'https://www.icompareloan.com/img/banks/UOB.png');    --14


INSERT INTO ref_rates(name, rate, bank_id) VALUES('1M SIBOR', 1.88, 1); --1
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3M SIBOR', 1.88, 1); --2
INSERT INTO ref_rates(name, rate, bank_id) VALUES('6M SIBOR', 1.94, 1); --3
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.25, 2); --4 BOC 2Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.6, 4); --5 CITI 2Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.75, 4); --6 CITI 3Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.08, 5); --7 DBS 2Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('FHR8', '0.95', 5); --8 DBS FHR8
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.38, 6); --9 HLF 2Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed', 2.6, 6); --10 HLF 3Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('HHR', '4.85', 6); --11 HLF HHR
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed (min loan $800k)', 1.98, 7); --12 HSBC 2Yrs Fixed >$800k
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2, 7); --13 HSBC 2Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed (min loan $800k)', 2.03, 7); --14 HSBC 3Yrs Fixed >$800k
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed', 2.05, 7); --15 HSBC 3Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('TMDR', 1.40, 7); --16 HSBC FDR
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.28, 8);   --17 MAY 2Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed', 2.33, 8);   --18 MAY 3Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed 3rd yr', 2.4, 8);   --19 MAY 3Yrs Fixed 3rd yr
INSERT INTO ref_rates(name, rate, bank_id) VALUES('4Yrs Fixed', 2.78, 8);   --20 MAY 4Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('SRFR2', 4.85, 8);   --21 MAY SRFR2
INSERT INTO ref_rates(name, rate, bank_id) VALUES('1Yr Fixed', 2.22, 9);   --22 OCBC 1Yr Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 1.98, 9);   --23 OCBC 2Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('MBR', 1.55, 9);   --24 OCBC MBR
INSERT INTO ref_rates(name, rate, bank_id) VALUES('R BR', 0, 10); --25 RHB R BR
INSERT INTO ref_rates(name, rate, bank_id) VALUES('FDR', 1.37, 11); --26 SCB FDR
INSERT INTO ref_rates(name, rate, bank_id) VALUES('CLR19', 3.75, 12); --27 SF CLR19
INSERT INTO ref_rates(name, rate, bank_id) VALUES('PHDR19', '2.25', 12); --28 SF PHDR19
INSERT INTO ref_rates(name, rate, bank_id) VALUES('PPLR19', '3.25', 12); --29 SF PPLR19
INSERT INTO ref_rates(name, rate, bank_id) VALUES('SI BR', '3.25', 13);   --30 SI SI BR
INSERT INTO ref_rates(name, rate, bank_id) VALUES('2Yrs Fixed', 2.08, 14);   --31 UOB 2Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed', 1.98, 14);   --32 UOB 3Yrs Fixed
INSERT INTO ref_rates(name, rate, bank_id) VALUES('3Yrs Fixed 3rd yr', 2.08, 14);   --33 UOB 3Yrs Fixed 3rd yr
INSERT INTO ref_rates(name, rate, bank_id) VALUES('ML', 0.85, 14);   --34 UOB ML



INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('BOC 3M Sibor, 2Yrs lock-in (Min loan $500k)', 'both', 'float', 'private', 'completed', true, 500000, 2, 0.7, 2, 0.7, 2, 0.7, 'For loan quantum 500k and above. Legal Subsidy of 0.4% of loan amount, capped at $2,000. Full Redemption penalty: 1.5%. Cancellation Fees: 1.5%. Admin Fee: 0.25%. Floor rate set at 1.00%. In the event SIBOR + Spread is lower than 1%, Floor rate will apply.', 2);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('BOC 2Yrs Fixed, 2Yrs lock-in (Min loan $500k)', 'both', 'fixed', 'private', 'completed', true, 500000, 4, 0, 4, 0, 2, 0.7, 'For loan quantum 500k and above. Legal Subsidy of 0.4% of loan amount, capped at $1,800. Full Redemption penalty: 1.5%. Partial repayment penalty: 1.5%. Cancellation Fees: 1.5%. Admin Fee: 0.25%. Floor rate set at 1.00%. In the event SIBOR + Spread is lower than 1%, Floor rate will apply.', 2);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('BOC 3M Sibor, 2Yrs lock-in (Min loan $300k)', 'both', 'float', 'private', 'completed', false, 300000, 2, 0.75, 2, 0.75, 2, 0.75, 'For loan quantum 300k and above. *NO* Legal Subsidy. Floor rate set at 1.00%. In the event SIBOR + Spread is lower than 1%, Floor rate will apply. Cancellation Penalty: 1.5%. No other fees.', 2);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CIMB 1M Sibor, 2Yrs lock-in (Min loan $200k)', 'both', 'float', 'private', 'completed', true, 200000, 1, 0.25, 1, 0.3, 1, 0.35, 'Full redemption penalty - 1.5%. No partial prepayment penalty. No legal subsidy. Min loan size: $200K', 3);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CIMB 1M Sibor, 2Yrs lock-in (Min loan $200k)', 'new', 'float', 'private', 'buc', true, 200000, 1, 0.25, 1, 0.3, 1, 0.35, 'Full redemption penalty - 1.5%. No partial prepayment penalty. No legal subsidy. Min loan size: $200K', 3);

----------------------------------------Editing & tracking----------------------------

INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CITI 1M Sibor, 2Yrs lock-in (Min loan $500k)', 'both', 'float', 'private', 'completed', true, 500000, 1, 0.3, 1, 0.3, 1, 0.4, 'legal subsidy for refi is 0.2% of loan amount capped at $2,500. Comes with 50% interest offset. Waiver of prepayment fee due to sale of property.', 4);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CITI 1M Sibor, 2Yrs lock-in (Min loan $500k)', 'both', 'float', 'private', 'completed', true, 500000, 1, 0.3, 1, 0.3, 1, 0.4, 'legal subsidy for refi is 0.2% of loan amount capped at $2,500. Comes with 50% interest offset. Waiver of prepayment fee due to sale of property.', 4);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CITI 2Yrs Fixed, 2Yrs lock-in (Min loan $500k)', 'both', 'fixed', 'private', 'completed', true, 500000, 5, 0, 5, 0, 1, 0.9, 'legal subsidy for refi is 0.2% of loan amount capped at $2,500', 4);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CITI 1M Sibor, 2Yrs lock-in (Min loan $500k)', 'new', 'float', 'private', 'buc', false, 500000, 1, 0.25, 1, 0.25, 1, 0.45, 'Min loan $500K. Comes with 50% interest offset.', 4);
INSERT INTO packages(name, new_refi, float_fixed, hdb_pvt, buc_completed, lock_in, min_loan, rate_1, spread_1, rate_2, spread_2, rate_3, spread_3, remarks, bank_id) VALUES('CITI 3Yrs Fixed, 2Yrs lock-in (Min loan $500k)', 'both', 'fixed', 'private', 'completed', true, 500000, 6, 0, 6, 0, 6, 0, 'legal subsidy for refi is 0.2% of loan amount capped at $2,500', 4);

----------------------------------------Editing & tracking----------------------------