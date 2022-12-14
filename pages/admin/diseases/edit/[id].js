import ADMLayout from '@/components/admin/ADMLayout';
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import { API_URL, NEXT_URL } from '@/config';
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';
import AuthContext from 'context/AuthContext';
import { parseCookies } from 'helpers/index';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

export default function EditDiseasePage({ data }) {
    const { user, error } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState("");;
    const router = useRouter();

    const [name, setName] = useState(data.attributes.name)
    const [detectedLocal, setDetectedLocal] = useState(data.attributes.detectedLocal);
    const [description, setDescription] = useState(data.attributes.description);
    const [treatmentType, setTreatmentType] = useState(data.attributes.treatmentType);
    const [proprieties, setProprieties] = useState(data.attributes.proprieties)
    // ===================================================================


    const handleClearForm = () => {
        setName('');
        setDetectedLocal('');
        setDescription('');
        setTreatmentType('');
        setProprieties([]);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch(`${API_URL}/deseases/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: {
                    name: name,
                    detectedLocal: detectedLocal,
                    description: description,
                    treatmentType: treatmentType,
                    proprieties: proprieties
                }
            }),
        })

        if (!res.ok) {
            if (res.status === 403 || res.status === 401) {
                setErrorMessage('N??o est?? autorizado')
                return
            } else {
                alert('Alguma coisa n??o funcionou')
            }
        } else {
            router.push(`/admin/diseases/${data.id}`)
        }
    }
    // ===================================================================
    return (
        <ADMLayout>
            <Container component='main' maxWidth='md' sx={{ minHeight: 520, mb: 10 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Title>Cadastrando uma doen??a comunicada</Title>
                    <Button
                        variant='contained'
                        LinkComponent={Link}
                        href='/admin/diseases'
                    >
                        Ver Todas
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component='form'
                        noValidate
                        sx={{ mt: 3 }}
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                Nome da doen??a
                                <TextField
                                    name='detectedLocal'
                                    required
                                    fullWidth
                                    id='name'
                                    placeholder='Nome da doen??a'
                                    autoFocus
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                /></Grid>
                            <Grid item xs={12} >
                                Local detectado
                                <TextField
                                    name='detectedLocal'
                                    required
                                    fullWidth
                                    id='detectedLocal'
                                    placeholder='Local detectado'
                                    value={detectedLocal}
                                    onChange={(e) => setDetectedLocal(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                Descri????o
                                <TextField
                                    multiline
                                    rows={5}
                                    required
                                    fullWidth
                                    id='description'
                                    placeholder='Descri????o'
                                    name='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                Tipo de tratamento
                                <TextField
                                    required
                                    fullWidth
                                    id='treatmentType'
                                    placeholder='Tipo de tratamento'
                                    name='treatmentType'
                                    value={treatmentType}
                                    onChange={(e) => setTreatmentType(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Salvar
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    fullWidth
                                    variant='contained'
                                    sx={{
                                        mt: 3, mb: 2, bgcolor: red[800], color: grey[100], ":hover": {
                                            bgcolor: red[800], color: grey[100],
                                        }
                                    }} onClick={handleClearForm}
                                >
                                    Limpar formul??rio
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ADMLayout>
    );
};


export async function getServerSideProps({ params: { id }, req }) {
    const res = await fetch(`${API_URL}/deseases/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const result = await res.json();
    if (res.ok) {
        console.log(result.data);
    } else {
        console.log(result.error.status)
    }
    return {
        props: { data: result.data },
    };
}