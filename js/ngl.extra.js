/**
 * @file Extra
 * @author Alexander Rose <alexander.rose@weirdbyte.de>
 */


// from Jmol http://jmol.sourceforge.net/jscolors/ (or 0xFFFFFF)
NGL.ElementColors = {
    "H": 0xFFFFFF, "HE": 0xD9FFFF, "LI": 0xCC80FF, "BE": 0xC2FF00, "B": 0xFFB5B5,
    "C": 0x909090, "N": 0x3050F8, "O": 0xFF0D0D, "F": 0x90E050, "NE": 0xB3E3F5, 
    "NA": 0xAB5CF2, "MG": 0x8AFF00, "AL": 0xBFA6A6, "SI": 0xF0C8A0, "P": 0xFF8000, 
    "S": 0xFFFF30, "CL": 0x1FF01F, "AR": 0x80D1E3, "K": 0x8F40D4, "CA": 0x3DFF00, 
    "SC": 0xE6E6E6, "TI": 0xBFC2C7, "V": 0xA6A6AB, "CR": 0x8A99C7, "MN": 0x9C7AC7, 
    "FE": 0xE06633, "CO": 0xF090A0, "NI": 0x50D050, "CU": 0xC88033, "ZN": 0x7D80B0, 
    "GA": 0xC28F8F, "GE": 0x668F8F, "AS": 0xBD80E3, "SE": 0xFFA100, "BR": 0xA62929, 
    "KR": 0x5CB8D1, "RB": 0x702EB0, "SR": 0x00FF00, "Y": 0x94FFFF, "ZR": 0x94E0E0, 
    "NB": 0x73C2C9, "MO": 0x54B5B5, "TC": 0x3B9E9E, "RU": 0x248F8F, "RH": 0x0A7D8C, 
    "PD": 0x006985, "AG": 0xC0C0C0, "CD": 0xFFD98F, "IN": 0xA67573, "SN": 0x668080, 
    "SB": 0x9E63B5, "TE": 0xD47A00, "I": 0x940094, "XE": 0x940094, "CS": 0x57178F, 
    "BA": 0x00C900, "LA": 0x70D4FF, "CE": 0xFFFFC7, "PR": 0xD9FFC7, "ND": 0xC7FFC7,
    "PM": 0xA3FFC7, "SM": 0x8FFFC7, "EU": 0x61FFC7, "GD": 0x45FFC7, "TB": 0x30FFC7, 
    "DY": 0x1FFFC7, "HO": 0x00FF9C, "ER": 0x00E675, "TM": 0x00D452, "YB": 0x00BF38, 
    "LU": 0x00AB24, "HF": 0x4DC2FF, "TA": 0x4DA6FF, "W": 0x2194D6, "RE": 0x267DAB, 
    "OS": 0x266696, "IR": 0x175487, "PT": 0xD0D0E0, "AU": 0xFFD123, "HG": 0xB8B8D0, 
    "TL": 0xA6544D, "PB": 0x575961, "BI": 0x9E4FB5, "PO": 0xAB5C00, "AT": 0x754F45, 
    "RN": 0x428296, "FR": 0x420066, "RA": 0x007D00, "AC": 0x70ABFA, "TH": 0x00BAFF, 
    "PA": 0x00A1FF, "U": 0x008FFF, "NP": 0x0080FF, "PU": 0x006BFF, "AM": 0x545CF2, 
    "CM": 0x785CE3, "BK": 0x8A4FE3, "CF": 0xA136D4, "ES": 0xB31FD4, "FM": 0xB31FBA, 
    "MD": 0xB30DA6, "NO": 0xBD0D87, "LR": 0xC70066, "RF": 0xCC0059, "DB": 0xD1004F, 
    "SG": 0xD90045, "BH": 0xE00038, "HS": 0xE6002E, "MT": 0xEB0026, "DS": 0xFFFFFF, 
    "RG": 0xFFFFFF, "CN": 0xFFFFFF, "UUT": 0xFFFFFF, "FL": 0xFFFFFF, "UUP": 0xFFFFFF, 
    "LV": 0xFFFFFF, "UUH": 0xFFFFFF
};

// http://dx.doi.org/10.1021/jp8111556 (or 2.0)
NGL.VdwRadii = {
    "H": 1.1, "HE": 1.4, "LI": 1.81, "BE": 1.53, "B": 1.92, "C": 1.7, 
    "N": 1.55, "O": 1.52, "F": 1.47, "NE": 1.54, "NA": 2.27, "MG": 1.73, "AL": 1.84, 
    "SI": 2.1, "P": 1.8, "S": 1.8, "CL": 1.75, "AR": 1.88, "K": 2.75, "CA": 2.31, 
    "SC": 2.3, "TI": 2.15, "V": 2.05, "CR": 2.05, "MN": 2.05, "FE": 2.05, "CO": 2.0, 
    "NI": 2.0, "CU": 2.0, "ZN": 2.1, "GA": 1.87, "GE": 2.11, "AS": 1.85, "SE": 1.9, 
    "BR": 1.83, "KR": 2.02, "RB": 3.03, "SR": 2.49, "Y": 2.4, "ZR": 2.3, "NB": 2.15, 
    "MO": 2.1, "TC": 2.05, "RU": 2.05, "RH": 2.0, "PD": 2.05, "AG": 2.1, "CD": 2.2, 
    "IN": 2.2, "SN": 1.93, "SB": 2.17, "TE": 2.06, "I": 1.98, "XE": 2.16, "CS": 3.43, 
    "BA": 2.68, "LA": 2.5, "CE": 2.48, "PR": 2.47, "ND": 2.45, "PM": 2.43, "SM": 2.42, 
    "EU": 2.4, "GD": 2.38, "TB": 2.37, "DY": 2.35, "HO": 2.33, "ER": 2.32, "TM": 2.3, 
    "YB": 2.28, "LU": 2.27, "HF": 2.25, "TA": 2.2, "W": 2.1, "RE": 2.05, "OS": 2.0, 
    "IR": 2.0, "PT": 2.05, "AU": 2.1, "HG": 2.05, "TL": 1.96, "PB": 2.02, "BI": 2.07, 
    "PO": 1.97, "AT": 2.02, "RN": 2.2, "FR": 3.48, "RA": 2.83, "AC": 2.0, "TH": 2.4, 
    "PA": 2.0, "U": 2.3, "NP": 2.0, "PU": 2.0, "AM": 2.0, "CM": 2.0, "BK": 2.0, 
    "CF": 2.0, "ES": 2.0, "FM": 2.0, "MD": 2.0, "NO": 2.0, "LR": 2.0, "RF": 2.0, 
    "DB": 2.0, "SG": 2.0, "BH": 2.0, "HS": 2.0, "MT": 2.0, "DS": 2.0, "RG": 2.0, 
    "CN": 2.0, "UUT": 2.0, "FL": 2.0, "UUP": 2.0, "LV": 2.0, "UUH": 2.0
};

// http://dx.doi.org/10.1039/b801115j (or 1.6)
NGL.CovalentRadii = {
    "H": 0.31, "HE": 0.28, "LI": 1.28, "BE": 0.96, "B": 0.84, "C": 0.76, 
    "N": 0.71, "O": 0.66, "F": 0.57, "NE": 0.58, "NA": 1.66, "MG": 1.41, "AL": 1.21, 
    "SI": 1.11, "P": 1.07, "S": 1.05, "CL": 1.02, "AR": 1.06, "K": 2.03, "CA": 1.76, 
    "SC": 1.7, "TI": 1.6, "V": 1.53, "CR": 1.39, "MN": 1.39, "FE": 1.32, "CO": 1.26, 
    "NI": 1.24, "CU": 1.32, "ZN": 1.22, "GA": 1.22, "GE": 1.2, "AS": 1.19, "SE": 1.2, 
    "BR": 1.2, "KR": 1.16, "RB": 2.2, "SR": 1.95, "Y": 1.9, "ZR": 1.75, "NB": 1.64, 
    "MO": 1.54, "TC": 1.47, "RU": 1.46, "RH": 1.42, "PD": 1.39, "AG": 1.45, "CD": 1.44, 
    "IN": 1.42, "SN": 1.39, "SB": 1.39, "TE": 1.38, "I": 1.39, "XE": 1.4, "CS": 2.44, 
    "BA": 2.15, "LA": 2.07, "CE": 2.04, "PR": 2.03, "ND": 2.01, "PM": 1.99, "SM": 1.98, 
    "EU": 1.98, "GD": 1.96, "TB": 1.94, "DY": 1.92, "HO": 1.92, "ER": 1.89, "TM": 1.9, 
    "YB": 1.87, "LU": 1.87, "HF": 1.75, "TA": 1.7, "W": 1.62, "RE": 1.51, "OS": 1.44, 
    "IR": 1.41, "PT": 1.36, "AU": 1.36, "HG": 1.32, "TL": 1.45, "PB": 1.46, "BI": 1.48, 
    "PO": 1.4, "AT": 1.5, "RN": 1.5, "FR": 2.6, "RA": 2.21, "AC": 2.15, "TH": 2.06, 
    "PA": 2.0, "U": 1.96, "NP": 1.9, "PU": 1.87, "AM": 1.8, "CM": 1.69, "BK": 1.6, 
    "CF": 1.6, "ES": 1.6, "FM": 1.6, "MD": 1.6, "NO": 1.6, "LR": 1.6, "RF": 1.6, 
    "DB": 1.6, "SG": 1.6, "BH": 1.6, "HS": 1.6, "MT": 1.6, "DS": 1.6, "RG": 1.6, 
    "CN": 1.6, "UUT": 1.6, "FL": 1.6, "UUP": 1.6, "LV": 1.6, "UUH": 1.6
};


/**
 * An object fro representing a PDB file.
 * @class
 */
NGL.PDBobject = function( pdbFile, onLoad ){

    var loader = new THREE.XHRLoader();
    var self = this;

    loader.load( pdbFile, function( str ){
        
        self.parse( str );
        
        onLoad( self );

    } );

}

/**
 * Parses a pdb string. Copied from GLmol.parsePDB2.
 * @param  {String} str
 */
NGL.PDBobject.prototype.parse = function( str ) {

    console.time( "pdb parsing" );

    var atoms = [];
    var bonds = [];
    var protein = {
        pdbID: '', title: '',
        sheet: [], helix: [],
        biomtChains: '', biomtMatrices: [], symMat: []
    };

    var atoms_cnt = 0;
    var lines = str.split("\n");

    var i, j, b;
    var line, recordName, altloc, serial, elem;

    for( i = 0; i < lines.length; i++ ){

        line = lines[i];
        recordName = line.substr(0, 6);

        if (recordName == 'ATOM  ' || recordName == 'HETATM') {

            altLoc = line.substr(16, 1);
            if (altLoc != ' ' && altLoc != 'A') continue; // FIXME: ad hoc

            serial = parseInt(line.substr(6, 5));
            elem = line.substr(76, 2).trim();

            if (elem == '') { // for some incorrect PDB files
                elem = line.substr(12, 4).trim();
            }

            atoms[serial] = {
                'resn': line.substr(17, 3), 
                'x': parseFloat(line.substr(30, 8)), 
                'y': parseFloat(line.substr(38, 8)), 
                'z': parseFloat(line.substr(46, 8)), 
                'elem': elem,
                'hetflag': ( line[0]=='H' ) ? true : false, 
                'chain': line.substr(21, 1), 
                'resi': parseInt(line.substr(22, 5)), 
                'serial': serial, 
                'atom': line.substr(12, 4).trim(), 
                'bonds': [], 
                'ss': 'c', 
                'b': parseFloat(line.substr(60, 8)),
                // , altLoc': altLoc

                'color': 0xFFFFFF, 
                'vdw': NGL.VdwRadii[ elem ],
                'covalent': NGL.CovalentRadii[ elem ],
            };

        } else if (recordName == 'SHEET ') {

            var startChain = line.substr(21, 1);
            var startResi = parseInt(line.substr(22, 4));
            var endChain = line.substr(32, 1);
            var endResi = parseInt(line.substr(33, 4));
            protein.sheet.push([startChain, startResi, endChain, endResi]);

        } else if (recordName == 'CONECT') {

            // MEMO: We don't have to parse SSBOND, LINK because both are also 
            // described in CONECT as per standard. But what about 2JYT???
            var from = parseInt( line.substr( 6, 5 ) );
            var pos = [ 11, 16, 21, 26 ];
            var bondOrder = 0;
            var to;

            for (var j = 0; j < 4; j++) {

                var to = parseInt( line.substr( pos[ j ], 5 ) );

                if( isNaN( to ) ) continue;
                // ignore redundant entries
                if( bonds[ [ to, from ] ] ) continue;

                b = [ from, to ];

                // interpret repetitions of "to" in a 
                // single CONECT record as multiple bonding
                if( bonds[ b ] ){
                    bonds[ b ][0] += 1;
                }else{
                    bonds[ b ] = [ 1, b ];
                }

            }

        } else if (recordName == 'HELIX ') {

            var startChain = line.substr(19, 1);
            var startResi = parseInt(line.substr(21, 4));
            var endChain = line.substr(31, 1);
            var endResi = parseInt(line.substr(33, 4));
            protein.helix.push([startChain, startResi, endChain, endResi]);

        } else if (recordName == 'CRYST1') {

            protein.a = parseFloat(line.substr(6, 9));
            protein.b = parseFloat(line.substr(15, 9));
            protein.c = parseFloat(line.substr(24, 9));
            protein.alpha = parseFloat(line.substr(33, 7));
            protein.beta = parseFloat(line.substr(40, 7));
            protein.gamma = parseFloat(line.substr(47, 7));
            protein.spacegroup = line.substr(55, 11);

        } else if (recordName == 'REMARK') {

            var type = parseInt(line.substr(7, 3));
            if (type == 290 && line.substr(13, 5) == 'SMTRY') {
                var n = parseInt(line[18]) - 1;
                var m = parseInt(line.substr(21, 2));
                if (protein.symMat[m] == undefined)
                    protein.symMat[m] = new THREE.Matrix4().identity();
                protein.symMat[m].elements[n] = parseFloat(line.substr(24, 9));
                protein.symMat[m].elements[n + 4] = parseFloat(line.substr(34, 9));
                protein.symMat[m].elements[n + 8] = parseFloat(line.substr(44, 9));
                protein.symMat[m].elements[n + 12] = parseFloat(line.substr(54, 10));

            } else if (type == 350 && line.substr(13, 5) == 'BIOMT') {
                
                var n = parseInt(line[18]) - 1;
                var m = parseInt(line.substr(21, 2));
                if (protein.biomtMatrices[m] == undefined) protein.biomtMatrices[m] = new THREE.Matrix4().identity();
                protein.biomtMatrices[m].elements[n] = parseFloat(line.substr(24, 9));
                protein.biomtMatrices[m].elements[n + 4] = parseFloat(line.substr(34, 9));
                protein.biomtMatrices[m].elements[n + 8] = parseFloat(line.substr(44, 9));
                protein.biomtMatrices[m].elements[n + 12] = parseFloat(line.substr(54, 10));

            } else if (type == 350 && line.substr(11, 11) == 'BIOMOLECULE') {
            
                protein.biomtMatrices = []; protein.biomtChains = '';
            
            } else if (type == 350 && line.substr(34, 6) == 'CHAINS') {
            
                protein.biomtChains += line.substr(41, 40);
            
            }

        } else if (recordName == 'HEADER') {
        
            protein.pdbID = line.substr(62, 4);
        
        } else if (recordName == 'TITLE ') {
        
            if (protein.title == undefined) 
                protein.title = "";
            // CHECK: why 60 is not enough???
            protein.title += line.substr(10, 70) + "\n"; 
        
        } else if (recordName == 'COMPND') {
        
            // TODO: Implement me!
        
        }

    }

    console.timeEnd( "pdb parsing" );

    var covRadii = NGL.CovalentRadii;

    function isConnected( atom1, atom2 ) {

        if( atom1.hetflag && atom2.hetflag ) return 0;

        var distSquared = ( atom1.x - atom2.x ) * ( atom1.x - atom2.x ) + 
                          ( atom1.y - atom2.y ) * ( atom1.y - atom2.y ) + 
                          ( atom1.z - atom2.z ) * ( atom1.z - atom2.z );

        //   if (atom1.altLoc != atom2.altLoc) return false;
        if( isNaN( distSquared ) ) return 0;
        if( distSquared < 0.5 ) return 0; // maybe duplicate position.

        var d = atom1.covalent + atom2.covalent + 0.3;
        return distSquared < ( d * d );

    }

    var atom, atom2
    var nAtoms = atoms.length;

    console.time( "pdb bonding" );

    // Assign secondary structures & bonds
    for( i = 0; i < nAtoms; i++ ){
        
        atom = atoms[ i ];
        if( atom == undefined ) continue;

        
        // MEMO: Can start chain and end chain differ?
        for( j = 0; j < protein.sheet.length; j++ ){

            if (atom.chain != protein.sheet[j][0]) continue;
            if (atom.resi < protein.sheet[j][1]) continue;
            if (atom.resi > protein.sheet[j][3]) continue;
            atom.ss = 's';
            if (atom.resi == protein.sheet[j][1]) atom.ssbegin = true;
            if (atom.resi == protein.sheet[j][3]) atom.ssend = true;

        }

        for( j = 0; j < protein.helix.length; j++ ){

            if (atom.chain != protein.helix[j][0]) continue;
            if (atom.resi < protein.helix[j][1]) continue;
            if (atom.resi > protein.helix[j][3]) continue;
            atom.ss = 'h';
            if (atom.resi == protein.helix[j][1]) atom.ssbegin = true;
            else if (atom.resi == protein.helix[j][3]) atom.ssend = true;

        }

        // bonds
        for (j = i + 1; j < i + 30 && j < nAtoms; j++ ){

            atom2 = atoms[ j ];
            if( atom2 == undefined ) continue;
            
            if( isConnected( atom, atom2 ) ){
                b = [ i, j ];
                bonds[ b ] = [ 1, b ];
            }

        }

    }
    
    var singleBonds = [];
    var doubleBonds = [];

    Object.keys( bonds ).forEach( function( b ){ 

        b = bonds[ b ];
        var bondOrder = b[ 0 ];

        if( bondOrder==1 ){
            singleBonds.push( b[1] );
        }else if( bondOrder==2 ){
            doubleBonds.push( b[1] );
        }else if( bondOrder==3 ){
            console.info( "bondOrder 3" );
        }else if( bondOrder==4 ){
            console.info( "bondOrder 4" );
        }

    });

    console.timeEnd( "pdb bonding" );

    this.atoms = atoms;
    this.bonds = bonds;
    this.singleBonds = singleBonds
    this.doubleBonds = doubleBonds;
    this.protein = protein;
    
};

/**
 * Adds a representation of the PDB to a viewer instance.
 */
NGL.PDBobject.prototype.add = function( viewer, type, center ){

    console.time( "pdb add represention" );

    var sphereScale = 0.2;
    var sphereSize = false;
    var cylinderSize = 0.12;
    var line = false;

    var sphereBuffer;
    var cylinderBuffer, cylinderBuffer2a, cylinderBuffer2b;
    var lineBuffer, lineBuffer2;

    if( type=="spacefill" ){

        sphereScale = 1.0;
        sphereSize = false;
        cylinderSize = false;

    }else if( type=="ball+stick" ){

        sphereScale = 0.2;
        sphereSize = false;
        cylinderSize = 0.12;

    }else if( type=="stick" ){

        sphereScale = false;
        sphereSize = 0.15;
        cylinderSize = 0.15;

    }else if( type=="line" ){

        sphereScale = false;
        sphereSize = false;
        cylinderSize = false;
        line = true;

    }else if( type=="hyperball" ){

        sphereScale = 0.2;;
        sphereSize = false;
        cylinderSize = false;
        line = false;

    }

    var ad = this.getAtomData( sphereScale, sphereSize );

    if( !viewer.params.disableImpostor ){

        sphereBuffer = new NGL.SphereImpostorBuffer(
            ad.position, ad.color, ad.radius
        );

    }else{

        sphereBuffer = new NGL.SphereGeometryBuffer(
            ad.position, ad.color, ad.radius
        );

    }


    var bd, bd2;

    if( cylinderSize ){

        bd = this.getBondData( cylinderSize );
        bd2 = this.getBondData( cylinderSize, this.doubleBonds );

        if( !viewer.params.disableImpostor ){

            cylinderBuffer = new NGL.CylinderImpostorBuffer(
                bd.from, bd.to, bd.color, bd.color2, bd.radius, 0, false
            );

            cylinderBuffer2a = new NGL.CylinderImpostorBuffer(
                bd2.from, bd2.to, bd2.color, bd2.color2, bd2.radius, 1.5, type=="stick"
            );
            cylinderBuffer2b = new NGL.CylinderImpostorBuffer(
                bd2.from, bd2.to, bd2.color, bd2.color2, bd2.radius, -1.5, type=="stick"
            );

        }else{

            cylinderBuffer = new NGL.CylinderGeometryBuffer(
                bd.from, bd.to, bd.color, bd.color2, bd.radius, 0, false
            );

            cylinderBuffer2a = new NGL.CylinderGeometryBuffer(
                bd2.from, bd2.to, bd2.color, bd2.color2, bd2.radius, 0, false
            );

        }

        

    }else if( line ){

        bd = this.getBondData( cylinderSize );
        lineBuffer = new NGL.LineBuffer(
            bd.from, bd.to, bd.color, bd.color2
        );

        bd2 = this.getBondData( cylinderSize, this.doubleBonds );
        lineBuffer2 = new NGL.LineBuffer(
            bd2.from, bd2.to, bd2.color, bd2.color2
        );

    }else if( type=="hyperball" ){

        bd = this.getBondData( cylinderSize, null, sphereScale );
        cylinderBuffer = new NGL.HyperballStickImpostorBuffer(
            bd.from, bd.to, bd.color, bd.color2, bd.radius, bd.radius2, 0.12
        );
        
    }

    if( center ){

        var offset = THREE.GeometryUtils.center( sphereBuffer.geometry );
        var matrix = new THREE.Matrix4().makeTranslation( offset.x, offset.y, offset.z );

        if( cylinderSize ){

            cylinderBuffer.geometry.applyMatrix( matrix );

            if( cylinderBuffer2a ) cylinderBuffer2a.geometry.applyMatrix( matrix );
            if( cylinderBuffer2b ) cylinderBuffer2b.geometry.applyMatrix( matrix );

        }else if( line ){

            lineBuffer.geometry.applyMatrix( matrix );
            lineBuffer2.geometry.applyMatrix( matrix );

        }else if( type=="hyperball" ){

            cylinderBuffer.geometry.applyMatrix( matrix );

            matrix.applyToVector3Array( 
                cylinderBuffer.geometry.attributes.inputPosition1.array
            );
            matrix.applyToVector3Array( 
                cylinderBuffer.geometry.attributes.inputPosition2.array
            );

        }

    }

    if( sphereSize || sphereScale ){

        viewer.add( sphereBuffer );

    }

    if( cylinderSize ){

        viewer.add( cylinderBuffer );

        if( cylinderBuffer2a ) viewer.add( cylinderBuffer2a );
        if( cylinderBuffer2b ) viewer.add( cylinderBuffer2b );

    }else if( line ){

        viewer.add( lineBuffer );
        viewer.add( lineBuffer2 );

    }else if( type=="hyperball" ){

        viewer.add( cylinderBuffer );
        
    }

    console.timeEnd( "pdb add represention" );

};

NGL.PDBobject.prototype.getAtomData = function( scale, size ) {

    var atoms = this.atoms;
    var na = atoms.length;
    var colors = NGL.ElementColors;
    var radii = NGL.VdwRadii;

    var position = new Float32Array( na * 3 );
    var color = new Float32Array( na * 3 );
    var radius = new Float32Array( na );

    var a, c, r;
    var j = 0;

    for( var i = 0; i < na; ++i ){

        a = atoms[ i ];
        if( a === undefined ) continue;

        j = i * 3;

        position[ j + 0 ] = a.x;
        position[ j + 1 ] = a.y;
        position[ j + 2 ] = a.z;

        c = colors[ a.elem ];
        if( !c ) c = 0xCCCCCC;

        color[ j + 0 ] = ( c >> 16 & 255 ) / 255;
        color[ j + 1 ] = ( c >> 8 & 255 ) / 255;
        color[ j + 2 ] = ( c & 255 ) / 255;

        if( size ){
            radius[ i ] = size;
        }else{
            r = radii[ a.elem ];
            radius[ i ] = ( r ? r : 1.5 ) * scale;
        }

    }

    return {
        "position": position,
        "color": color,
        "radius": radius
    }

}

NGL.PDBobject.prototype.getBondData = function( size, bonds, scale ) {

    var atoms = this.atoms;
    if( !bonds ) bonds = this.singleBonds;
    var nb = bonds.length;
    var colors = NGL.ElementColors;
    var radii = NGL.VdwRadii;

    var from = new Float32Array( nb * 3 );
    var to = new Float32Array( nb * 3 );
    var color = new Float32Array( nb * 3 );
    var color2 = new Float32Array( nb * 3 );
    var radius = new Float32Array( nb );
    var radius2 = null;
    if( scale ) radius2 = new Float32Array( nb );

    var a1, a2, c1, c2, r;
    var j = 0;

    for( var i = 0; i < nb; ++i ){

        b = bonds[ i ];

        a1 = atoms[ b[ 0 ] ];
        a2 = atoms[ b[ 1 ] ];

        j = i * 3;

        from[ j + 0 ] = a1.x;
        from[ j + 1 ] = a1.y;
        from[ j + 2 ] = a1.z;

        to[ j + 0 ] = a2.x;
        to[ j + 1 ] = a2.y;
        to[ j + 2 ] = a2.z;

        c1 = colors[ a1.elem ];
        if( !c1 ) c1 = 0xCCCCCC;

        color[ j + 0 ] = ( c1 >> 16 & 255 ) / 255;
        color[ j + 1 ] = ( c1 >> 8 & 255 ) / 255;
        color[ j + 2 ] = ( c1 & 255 ) / 255;

        c2 = colors[ a2.elem ];
        if( !c2 ) c2 = 0xCCCCCC;

        color2[ j + 0 ] = ( c2 >> 16 & 255 ) / 255;
        color2[ j + 1 ] = ( c2 >> 8 & 255 ) / 255;
        color2[ j + 2 ] = ( c2 & 255 ) / 255;

        if( scale ){

            r = radii[ a1.elem ];
            radius[ i ] = ( r ? r : 1.5 ) * scale;
            r = radii[ a2.elem ];
            radius2[ i ] = ( r ? r : 1.5 ) * scale;

        }else{

            radius[ i ] = size;

        }

    }

    return {
        "from": from, "to": to, 
        "color": color, "color2": color2, 
        "radius": radius, "radius2": radius2
    }

}







